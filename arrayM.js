/**
 * Understanding Array methods
 * ForEach, Map, Filter, Reduce
 */

//  Understanding ForEach

let arr = [11,12,13,14,15,16,17,18] ;
arr.forEach((ele,ind) => {
    console.log(ele,ind);
});
// Foreach is just like for loop used to ittrate an array

// Understandig filter
let resMap = arr.filter((ele,ind)=>{
    return ind%2==0;
}) ;
// console.log(resMap); // Only returns array of even index

resFilter = arr.filter((ele,ind)=>{
    return ele%2==0;
}) ;
// console.log(resFilter); // Only return elements with even values

// Understanding Map

resMap = arr.map((ele,ind)=>{
    return ele-10 ;
})
// console.log(resMap) ;

resMap = arr.map((ele,ind)=>{
    return ind%2==0 ? ele-10 : ele-11 ;
})
// console.log(resMap) ;
// map can be used to do operation on array and return new array

// Understanding Reduce

let sum = arr.reduce((sum,ele)=>(sum+ele)) ;
let minValue = arr.reduce((val,ele)=>(Math.min(val,ele))) ;
let maxValue = arr.reduce((val,ele)=>(Math.max(val,ele))) ;
// console.log(sum,minValue,maxValue) ;

// Reduce means reducing to single value
// it can be used find sum, min, max etc 