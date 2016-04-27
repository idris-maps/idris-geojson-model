var intersect = require('turf-intersect')

exports.crop = function(bbox, features) {
	if(bboxIsOK(bbox)) {
		var bboxF = bboxFeat(bbox)
		var feats = []
		features.forEach(function(f) {
			var feat = f.JSON
			var props = f.properties
			var int = intersect(bboxF, feat)
			if(int) {
				if(int.geometry.type !== 'MultiLineString' && int.geometry.type !== 'LineString') {
					int.properties = props
					feats.push(int)
				}
			}
		})
		return {type: 'FeatureCollection', features: feats}
	} else {
		console.log(bbox, 'is not a valid bbox [minLng, minLat, maxLng, maxLat]')
	}
}

exports.intersect = function(bbox, features) {
	var bboxF = bboxFeat(bbox)
	var feats = []
	features.forEach(function(f) {
		var feat = f.JSON
		var int = intersect(bboxF, feat)
		if(int) {
			if(int.geometry.type !== 'MultiLineString' && int.geometry.type !== 'LineString') {
				feats.push(feat)
			}
		}
	})
	return {type: 'FeatureCollection', features: feats}
}


function bboxIsOK(bbox) {
	if(bbox[0] < bbox[2] && bbox[1] < bbox[3]) { return true }
	else { return false }
}

function bboxFeat(bbox) {
	var coords = [[
		[bbox[0], bbox[1]],
		[bbox[2], bbox[1]],
		[bbox[2], bbox[3]],
		[bbox[0], bbox[3]],
		[bbox[0], bbox[1]]
	]]
	return {
		type: 'Feature',
		properties: {name: 'bbox'},
		geometry: {
			type: 'Polygon',
			coordinates: coords
		}
	}
}
