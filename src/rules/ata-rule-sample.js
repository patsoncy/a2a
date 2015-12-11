
var chalk = require('chalk');
var log = require('enhanced-log');


module.exports = function(line){
	if(/^#\s+/.test(line)){
		// return '\x1B[42m'+line.replace(/#\s+/g,'')+'\x1B[0m';
		// return chalk.green(line.replace(/#\s+/g,''));
		line = line.replace(/(^#\s+)|(\s+#$)/g,'');
		return log.divider.box(line)+log.divider()
	}
	return line;
}