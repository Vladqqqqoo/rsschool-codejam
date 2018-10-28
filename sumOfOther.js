module.exports=function sumOfOthers(array) {
	return array.map(item=>array.reduce((acc,item)=>acc+item)-item);
}
