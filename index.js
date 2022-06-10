const getSum = (arr) => arr.reduce((acc, number) => acc + number, 0); 
 
const add = (...params) => (...params2) => params2.length ? add(getSum(params) + getSum(params2)) : params.join('');  
 
console.log(add(1)(1,2)(3)(4)()); 