var getUniq = require('../../utils/array-uniq') 

module.exports = function(features) {
	var types = []
	features.forEach(function(f) { types.push(f.geometry.type) })
	var uniq = getUniq(types)
	return uniq
}
