var Feature = require('../Feature')

exports.rmOne = function(index, self) {
	self.features.splice(index,1)
}

exports.rmSeveral = function(indexes, self) {
	var toKeep = []
	self.features.forEach(function(f, index) {
		var rm = false
		indexes.forEach(function(ii) {
			if(ii === index) { rm = true }
		})
		if(rm === false) { toKeep.push(f) } 
	})
	self.features = toKeep
}

exports.add = function(feat, self) {
	var f = new Feature(feat)
	self.features.push(f)
}
