var Collection = require('./lib/models/Collection')

module.exports = function(col) {
	var c = new Collection(col)
	return c
}
