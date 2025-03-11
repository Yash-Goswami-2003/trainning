let obj = {
    name : "Object 1",
    arr : [2,3,5],
    obj : {
        name :"Sub Object",
        val : 8
    }
} ;
// console.log(obj) ;
Object.freeze(obj) ;
obj.name = 98       //  value is not changes
obj.arr.push(100)   //  value is pushed in arr
obj.obj.name = "89" //  sub object name is changed but why
// console.log(obj) ;

let arr = [2,4,5] ;
Object.freeze(arr); //  created a immutable array
arr.push(8) ;
console.log(arr);