var esprima = require('esprima')
var att = require('fmtjs-att')
var render = require('fmtjs-att-render')

function fmtjs(text, options) {
	var ast = esprima.parse(text, {
		sourceType: 'module',
		comment: true,
		attachComment: true
	})
	var output = render(att(ast, options), options)
	return output
}

module.exports = exports = fmtjs