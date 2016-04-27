module.exports = function(features) {
	var pk = []
	features.forEach(function(f) {
		f.propKeys().forEach(function(fpk) {
			var exist = false
			pk.forEach(function(existPk) {
				if(fpk === existPk) { exist = true }
			})
			if(exist === false) { pk.push(fpk) }
		})
	})
	return pk
}
