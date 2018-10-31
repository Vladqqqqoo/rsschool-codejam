module.exports=function make(...n){
  return function(...x) {
		if(x.every(item=>{return typeof item === "function"}))
		return x[0](n);
		else{
			n.push(...x);
			return make(...n);
		}
	};
}
