
var chalk = require('chalk');

var lineRules = {
	'^#\s+'  		 : function(line){
									line = line.replace(/(^#\s+)|(\s+#$)/g,'==h1==');
									return line;
								 },
	'^##\s+' 		 : function(line){
									line = line.replace(/(^##\s+)|(\s+##$)/g,'==h2==');
									return line;
								 },
	'^###\s+' 	 : function(line){
									line = line.replace(/(^###\s+)|(\s+###$)/g,'==h3==');
									return line;
								 },
	'^####\s+' 	 : function(line){
									line = line.replace(/(^####\s+)|(\s+####$)/g,'==h4==');
									return line;
								 },
	'^#####\s+'  : function(line){
									line = line.replace(/(^#####\s+)|(\s+#####$)/g,'==h5==');
									return line;
								 },
	'^######\s+' : function(line){
									line = line.replace(/(^######\s+)|(\s+######$)/g,'==h6==');
									return line;
								 },
	''					 : function(line){}
}



var multilineRules = {

}


module.exports = function(line){

	var parsedLine = line;

	Object.key(lineRules).map(function(regStr){
		var reg = new RegExp(regStr);
		if(reg.test(line)){
			reg.
		}

	})





	return parsedLine;
}