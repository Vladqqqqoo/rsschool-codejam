module.exports = function sumOfOthers(array) {
	return array.map(item => array.reduce((acc, elem) => acc + elem) - item);
};
