var getBbox = require('../utils/feat-bbox')

module.exports = function(feat) {
	var self = this
	self.bbox = getBbox(feat)
	self.geometry = feat.geometry
	self.properties = feat.properties
	self.JSON = {type: 'Feature', properties: self.properties, geometry: self.geometry}
	self.propKeys = function() {
		var keys = []
		for(k in self.properties) { keys.push(k) }
		return keys
	}
	self.setProperty = function(key, val) {
		self.properties[key] = val
	}
}
