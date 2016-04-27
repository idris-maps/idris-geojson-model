module.exports = function(arr) {
	var uniq = []
	arr.forEach(function(o) {
		var exist = false
		uniq.forEach(function(u) {
			if(o===u) { exist = true }
		})
		if(exist === false) { uniq.push(o) }
	})
	return uniq
}
