/* broadly 2 categories on the basis of stroring and accessing:-
 1. Primitive  (call by value changes are made in the copy)   
 2. Non-Primitive (call by refernce)

Primitive(7 types):-
String
Number
Boolean
null
undefined
symbol  (const id=symbol('123') ,const anotherid=symbol('123') both the values are differnt)
bigint


Non-Primitve:-

Arrays
Objects
Functions

Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.
In TypeScript we need to define te datatype

const heros=['shakiman','doga','naagraj']
let myobj={
    nem:"hitesh",
    age:22
}

const myfunc=function(){
    conosole.log("Hello")
}
typeof(myfunc)    //function
*/