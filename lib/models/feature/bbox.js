var allPoints = require('./all-points')

module.exports = function(feat) {
	var points = allPoints(feat)
	var minLng = Infinity
	var maxLng = -Infinity
	var minLat = Infinity
	var maxLat = -Infinity
	points.forEach(function(p) {
		if(p[0] < minLng) { minLng = p[0] }
		if(p[0] > maxLng) { maxLng = p[0] }
		if(p[1] < minLat) { minLat = p[0] }
		if(p[1] > maxLat) { maxLat = p[0] }
	})
	return [minLng, minLat, maxLng, maxLat]
}
