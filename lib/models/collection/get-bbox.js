module.exports = function(features) {
	var bb = [Infinity, Infinity, -Infinity, -Infinity]
	features.forEach(function(f) {
		if(f.bbox[0] < bb[0]) { bb[0] = f.bbox[0] }
		if(f.bbox[1] < bb[1]) { bb[1] = f.bbox[1] }
		if(f.bbox[2] > bb[2]) { bb[2] = f.bbox[2] }
		if(f.bbox[3] > bb[3]) { bb[3] = f.bbox[3] }
	})
	return bb
}
