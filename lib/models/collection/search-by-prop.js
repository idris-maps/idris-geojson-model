exports.one = function(key, val, features) {
	var feats = []
	features.forEach(function(f) { 
		if(f.properties[key] === val) {
			feats.push(f.JSON)
		}
	})
	return {
		type: 'FeatureCollection',
		features: feats
	}
}

exports.several = function(key, vals, features) {
	var feats = []
	features.forEach(function(f) {
		vals.forEach(function(v) {
			if(f.properties[key] === v) {
				feats.push(f.JSON)
			}
		})
	})
	return {
		type: 'FeatureCollection',
		features: feats
	}
}
