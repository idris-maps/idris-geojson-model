var getBbox = require('./collection/get-bbox')
var getPropKeys = require('./collection/get-prop-keys')
var getProperties = require('./collection/get-properties')
var getProperty = require('./collection/get-property')
var getPropertyTable = require('./collection/get-property-table')
var getGeoTypes = require('./collection/get-geo-types')
var separateGeoTypes = require('./collection/separate-geo-types')
var searchByProp = require('./collection/search-by-prop')
var searchByBbox = require('./collection/search-by-bbox')
var Feature = require('./Feature')

module.exports = function(col) {
	var self = this
	self.features = []

	col.features.forEach(function(feat) {
		var f = new Feature(feat)
		self.features.push(f)
	})

	self.bbox = getBbox(self.features)
	self.propKeys = getPropKeys(self.features)
	self.properties = getProperties(self.propKeys, self.features)
	self.propertyTable = getPropertyTable(self.features, self.propKeys)
	self.property = function(prop, order) {
		return getProperty(prop, order, self.properties)
	}
	self.searchByProperty = function(key, val) {
		return searchByProp.one(key, val, self.features)
	}
	self.searchByProperties = function(key, vals) {
		return searchByProp.several(key, vals, self.features)
	}
	self.setFeatureProperty = function(index, key, val) {
		self.features[index].setProperty(key, val)
	}
	self.searchByBbox = function(bbox, bool) {
		if(bool) { return searchByBbox.crop(bbox, self.features) }
		else { return searchByBbox.intersect(bbox, self.features) }
	}
	self.geoTypes = getGeoTypes(self.features)
	self.separateGeoTypes = function(bool) {
		if(bool) { return separateGeoTypes.six(self.features, self.geoTypes) }
		else { return separateGeoTypes.three(self.features, self.geoTypes) }
	}
}


