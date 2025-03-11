// Undestanding Objects and manipulations

let obj = new Object();
console.log(obj);   //  {}

// Creating Objects using constructor functions

function User(name,age,phone)
{
    this.name = name ;
    this.age = age ;
    this.phone = phone ;
    this.pass = phone.toString().split('').reduce((prev,ele)=>{
        if (typeof prev== typeof '') prev = parseInt(prev)+parseInt(ele) ;
        else prev+=parseInt(ele) ;
        return  prev ; 
    }) ;
}

let user1 = new User('Yash',21,8708366336) ;
let user2 = new User('Manish',48,9416122771) ;
console.log(user1) ;

console.log(user1.age) ; // 21
console.log(user2['age']) ; // 48

// How to Extarct key, values or key-value pairs form an Object

let keysUser1 = Object.keys(user1);
console.log(keysUser1) ;    //  array of keys

let valuesUser1 = Object.values(user1);
console.log(valuesUser1) ;  //  array of values

let keyValueUser1 = Object.entries(user1) ;
console.log(keyValueUser1) ;//  array of key value pairs

// Using spread operator ...

let obj1 = {
    name : 'yash',
    age : 21,
} ;
let obj2 = {
    ...obj1,
    auth: true
}
let obj3 = {
    age : 0
}
console.log(obj2) ; // merges object obj1 into obj2 using spread operator (...)
// console.log(obj1)
let mergedObjs = Object.assign(obj1,obj2,obj3) ;
console.log(mergedObjs) ; // returns a combined object
console.log(obj1) // modifies obj1 varriable

// Frezing an Object

let frObj = {
    user : 'yash',
    age : 21,
    arr : [2,3,5,6],
    obj : {
        mail : 'example@example.com'
    }
}

Object.freeze(frObj) ;

console.log(frObj);
frObj.age = 35;
console.log(frObj) ;    // not modified
frObj.arr.pop();
console.log(frObj);     // modified
frObj.obj.mail = '' ;
console.log(frObj);     // modified

// Object.freeze freezes object shallow 
// if we need to deep freeze we need to make a function for that

function deepFreeze(obj)
{
    Object.keys(obj).forEach((key)=>{
        if (typeof obj === 'object' && obj[key]!=null)
        {
            deepFreeze(obj[key]) ;
        }
    })
    Object.freeze(obj);
}

let deepObj = {
    name: "Yash",
    details: {
        age: 21,
        city: "hisar",
        address: {
            street: "anything",
            zip: 125001
        }
    }
};

deepFreeze(deepObj);

console.log(deepObj)
deepObj.details.address.street = '9876543' ;
console.log(deepObj) ;

// Understanding seal

let objSeal = {
    name: "Yash",
    age: 21
};

Object.seal(objSeal);
console.log(objSeal);
objSeal.age=9
console.log(objSeal);
objSeal.io = 98 ;
console.log(objSeal);
delete objSeal.name ;
console.log(objSeal);
// seal prevent adding or deleting parameters but can modify them

// Can we be Strangers Again

// Chiya