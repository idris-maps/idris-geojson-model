module.exports = function(propKeys, features) {
	var props = []
	propKeys.forEach(function(pk) {
		props.push({property: pk, values: []})
	})
	features.forEach(function(f) {
		var fProps = f.properties
		props.forEach(function(p) {
			p.values.push(fProps[p.property])
		})
	})
	props.forEach(function(prop) {
		var uniq = []
		prop.values.forEach(function(v) {
			var exist = false
			uniq.forEach(function(u) {
				if(u.value === v) {
					exist = true
					u.count = u.count + 1
				}
			})
			if(exist === false) {
				uniq.push({value: v, count: 1})
			}
		})
		prop.values = uniq
	})
	return props
	}
