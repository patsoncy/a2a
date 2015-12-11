
var chalk = require('chalk');

module.exports = function(line){
	if(/^#\s+/.test(line)){
		// return '\x1B[42m'+line.replace(/#\s+/g,'')+'\x1B[0m';
		return chalk.green(line.replace(/#\s+/g,''));
	}
	return line;
}