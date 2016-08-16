var esprima = require('esprima')
var att = require('fmtjs-att')
var render = require('fmtjs-att-render')

function fmtjs(text, options) {
	var ast = esprima.parse(text)
	var output = render(att(ast, options), options)
	return output
}

module.exports = exports = fmtjs

// test
console.log(fmtjs('var a = 100; var b = 200;'))