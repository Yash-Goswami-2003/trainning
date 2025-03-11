//  Understanding var, let and const

var user = "Yash" ; //  created a globally scopped varriable
if (true)
{
    var user = "Goswami" ;
}
console.log(user) ; //  output "Goswami" because var keyword can be redeclared
/**
 * var is globally and function scoped
 * does not follow block scope strictly
 * */ 

//  Same example using let

let user1 = "Yash" ;
// let user1 = 9;  //  SyntaxError: Identifier 'user1' has already been declared
if (true)
{
    let user1 = "Goswami" ; //  let is block scoped created a new user1 varriable inside this block {}
}
console.log(user1) ;    //  output "Yash"
/**
 * let is block scopped
 * and cannot be redeclared
 */

//  Understanding const

const arr = {
    name : "Yash",
    age : 21
}
arr.name = "Goswami" ;  //  changed name to Goswami
// arr = { name : "yash goswami"} ;    //  TypeError: Assignment to constant variable. 
console.log(arr) ;
/**
 * const cannot be redeclared or reassign
 */