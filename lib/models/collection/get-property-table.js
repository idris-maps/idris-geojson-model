module.exports = function(features, propKeys) {
	var table = []
	var first = ['index']
	propKeys.forEach(function(pk) { first.push(pk) })
	table.push(first)
	features.forEach(function(f, index) {
		var line = [index]
		propKeys.forEach(function(pk) {
			line.push(f.properties[pk])
		})
		table.push(line)
	})
	return table
}
