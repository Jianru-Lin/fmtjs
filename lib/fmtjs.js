var esprima = require('esprima')
var render = require('./render')

function fmtjs(text, options) {
	var ast = esprima.parse(text)
	var output = render(ast, options)
	return output
}

module.exports = exports = fmtjs