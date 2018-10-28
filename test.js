const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./sumOfOther');

describe ("SumOfOther", function() {

	it("should return new array, when each element at index 'i' is the sum of the remaining elements of the original array",
	function () {
		assert.deepEqual(sumOfOther([ 2, 3, 4, 1]),[8, 7, 6, 9]);
	})

	it("should return new array, when each element at index 'i' is the sum of the remaining elements of the original array",
	function () {
		assert.deepEqual(sumOfOther([ -2, -4, 1, 2, -4, 2, 3]),[ 0, 2, -3, -4, 2, -4, -5 ]);
	})

	it("should return new array, when each element at index 'i' is the sum of the remaining elements of the original array",
	function () {
		assert.deepEqual(sumOfOther([]),[]);
	})

	it("should return new array, when each element at index 'i' is the sum of the remaining elements of the original array",
	function () {
		assert.deepEqual(sumOfOther([-1,-2,-3,-4]),[-9,-8,-7,-6]);
	})
});