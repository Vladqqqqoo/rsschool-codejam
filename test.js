const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('./sumOfOther');
const make = require('./make');

describe('SumOfOther', () => {
	it("should return new array, when each element at index 'i' is the sum of the remaining elements of the original array",
		() => {
			assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
		});

	it("should return new array, when each element at index 'i' is the sum of the remaining elements of the original array",
		() => {
			assert.deepEqual(sumOfOther([-2, -4, 1, 2, -4, 2, 3]), [0, 2, -3, -4, 2, -4, -5]);
		});

	it("should return new array, when each element at index 'i' is the sum of the remaining elements of the original array",
		() => {
			assert.deepEqual(sumOfOther([]), []);
		});

	it("should return new array, when each element at index 'i' is the sum of the remaining elements of the original array",
		() => {
			assert.deepEqual(sumOfOther([-1, -2, -3, -4]), [-9, -8, -7, -6]);
		});
});

describe('make', () => {
	it('should return sum of elements', () => {
		assert.deepEqual(make(3, 4)(3, 5, 10)(10)(mas => mas.reduce((acc, item) => acc + item)), 35);
	});

	it('should return count of elements', () => {
		assert.deepEqual(make(2)(1, 5, -4)(mas => mas.length), 4);
	});

	it('should return a reverse array', () => {
		assert.deepEqual(make(-3, 4)(8)(-7)(mas => mas.reverse()), [-7, 8, 4, -3]);
	});

	it('should return an array with positive numbers', () => {
		assert.deepEqual(make(-1, 2)(5)(-5)(11)(-12)(mas => mas.filter(item => item > 0)), [2, 5, 11]);
	});
});
