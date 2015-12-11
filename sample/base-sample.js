var path = require('path');
var ata = require('../src/lib/ata');
var sampleRule = require('../src/rules/ata-rule-sample');

var filePath = path.resolve(__dirname,'base-sample.md');
var outputPath = path.resolve(__dirname,'test/test2/test3/base-sample.txt');


ata().use(sampleRule).parse(filePath).output();