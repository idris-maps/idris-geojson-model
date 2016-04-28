module.exports = function(feat, callback) {
	var type = feat.geometry.type
	var coords = feat.geometry.coordinates
	var points = getPoints(type, coords)
	return points
}

function getPoints(type, coords) {
	var points = []
	if(type === 'Point') { points = coords }
	else if(type === 'LineString' || type === 'MultiPoint') {
		coords.forEach(function(point) { points.push(point) })
	}
	else if(type === 'Polygon' || type === 'MultiLineString') {
		coords.forEach(function(part) {
			part.forEach(function(point) {
				points.push(point)
			})
		})
	}
	else if(type === 'MultiPolygon') {
		coords.forEach(function(polygon) {
			polygon.forEach(function(part) {
				part.forEach(function(point) {
					points.push(point)
				})
			})
		})
	} 
	else {
		console.log(type + ' is not a valid Geometry type')
	}
	return points
}

