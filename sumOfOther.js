module.exports=function sumOfOthers(array) {
	return array.map(item=>array.reduce((acc,item)=>acc+item)-item);
}

// console.log(fn([2, 3, 4, 1]));