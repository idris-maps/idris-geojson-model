var getUniq = require('../../utils/array-uniq') 

exports.three = function(features, geoTypes) {
	var geoTypes3 = threeUniq(geoTypes)
	if(oneGeoType(geoTypes3)) {
		return [{type: geoTypes3[0], features: feats2json(features)}]
	} else {
		var gts = []
		geoTypes3.forEach(function(gt) {
			gts.push({type: gt, features: []})
		})
		features.forEach(function(f) {
			gts.forEach(function(gt) {
				if(f.geometry.type === gt.type || f.geometry.type === 'Multi' + gt.type) { gt.features.push(f.JSON) }
			})
		})
		return gts
	}
}

exports.six = function(features, geoTypes) {
	if(oneGeoType(geoTypes)) {
		return [{type: geoTypes[0], features: feats2json(features)}]
	} else {
		var gts = []
		geoTypes.forEach(function(gt) {
			gts.push({type: gt, features: []})
		})
		features.forEach(function(f) {
			gts.forEach(function(gt) {
				if(f.geometry.type === gt.type) { gt.features.push(f.JSON) }
			})
		})
		return gts
	}
}


function feats2json(features) {
	var feats = []
	features.forEach(function(f) {
		feats.push(f.JSON)
	})
	return feats
}

function threeUniq(geoTypes) {
	var all = []
	geoTypes.forEach(function(gt) {
		var spl = gt.split('Multi')
		if(spl.length === 1) { all.push(spl[0]) } 
		else { all.push(spl[1]) }
	})
	var uniq = getUniq(all)
	return uniq
}

function oneGeoType(geoTypes) {
	if(geoTypes.length === 1) { return true }
	else { return false }
}
