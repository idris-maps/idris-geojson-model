var Feature = require('../Feature')

module.exports = function(col, self) {
	self.features = []
	col.features.forEach(function(feat) {
		var f = new Feature(feat)
		self.features.push(f)
	})
}
