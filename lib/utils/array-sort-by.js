module.exports = function(property, asc) {
	if(asc === true) { var order = -1 } else { var order = 1 }
	return function (a,b) {
		var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
		return result * order
	}
}
