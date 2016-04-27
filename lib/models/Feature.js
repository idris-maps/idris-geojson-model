var getBbox = require('../utils/feat-bbox')

module.exports = function(feat) {
	var self = this
	self.bbox = getBbox(feat)
	self.geometry = feat.geometry
	self.properties = feat.properties
	self.JSON = function() {
		return {type: 'Feature', properties: self.properties, geometry: self.geometry}
	}
	self.propKeys = function() {
		var keys = []
		for(k in self.properties) { keys.push(k) }
		return keys
	}
	self.setProperty = function(key, val) {
		self.properties[key] = val
	}
	self.removeProperty = function(prop) {
		var newProps = {}
		for(k in self.properties) {
			if(k !== prop) { newProps[k] = self.properties[k] }
		}
		self.properties = newProps
	}
	self.removeProperties = function(props) {
		var newProps = {}
		for(k in self.properties) {
			var keep = true
			props.forEach(function(p) {
				if(k === p) { keep = false }
			})
			if(keep) { newProps[k] = self.properties[k] }
		}
		self.properties = newProps
	}
}
