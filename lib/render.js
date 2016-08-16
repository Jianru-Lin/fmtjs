module.exports = exports = render

function render(ast, opt) {
	return JSON.stringify(ast, null, 4)
}