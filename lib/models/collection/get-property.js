var by = require('../../utils/array-sort-by')

module.exports = function(prop, order, properties) {
	var values 
	properties.forEach(function(p) {
		if(p.property === prop) { values = p.values }
	})
	if(order === 'count') { values.sort(by('count', true)) }
	else { values.sort(by('value')) }
	return values
}
