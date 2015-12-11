var path = require('path');
var fs   = require('fs');
var mkdirp = require('mkdirp');
var pjson = require('../../package.json');


var ATA =function(){
	if(!(this instanceof ATA)){
		return new ATA();
	}
	this.rules = [];
	this.result = '';

	return this;
}


ATA.prototype.use = function(rule, isGlobal){
	if(!arguments.length){
		rule = require(path.resolve(path.join(pjson.rules.default,'ata-console-markdown')));
	}
	if(!~['string','function'].indexOf(typeof rule)){
		throw TypeError('rule must be a function or a string!');
	}
	if(typeof rule =='string'){
		rule = require(path.resolve(path.join(pjson.rules.extensions,'ata-' + rule)));
	}

	this.rules.push({ func : rule, global : !!isGlobal });
	return this;
}

ATA.prototype.parse = function(fileName){
	if(typeof fileName !== 'string'){
		throw TypeError("fileName must be a string or an array!");
	}

	var file = fs.readFileSync(fileName);
	var parsedContent = fileContent = file.toString();

	this.rules.forEach(function(rule){
		if(rule.global){
			parsedContent = rule['func'](parsedContent);
		}else{
			parsedContent = parsedContent.split('\n').map(function(line){ return rule['func'](line) }).join('\n');
		}
	});

	this.result = parsedContent;

	return this;
}


ATA.prototype.output = function(filePath) {
	if(!!filePath){
		if(typeof filePath == 'string'){
			var dir = filePath.split('/').slice(0,-1).join('/');
			mkdirp.sync(dir);
			fs.writeFileSync(filePath,this.result);
		}else{
			console.error('filePath must be a string!');
		}
	}else{
		console.log(this.result);
	}
	return this;
};

ATA.prototype.clear = function() {
	this.rules.length = 0;
	return this;
};

ATA.prototype.del = function(rule) {
	var index = this.rules.indexOf(rule);
	if(!!~index){
		this.rules.splice(index,1);
	}
	return this;
};

module.exports = ATA;