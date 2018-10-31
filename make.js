module.exports = function make(...n) {
	return function fn(...x) {
		if (x.every(item => typeof item === 'function')) {
			return x[0](n);
		}
		n.push(...x);
		return make(...n);
	};
};
