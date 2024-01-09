// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);  


// not comparinig same datatype

console.log("2">1);      //true
console.log("02">=1);    //true confirm to change the datatype not allowed in typescript

console.log(null >0);    //false
console.log(null==0);   //false non-predictable results
console.log(null >=0);   //true value conversion

//similar is for undefined all values are false
 

//=== strinct check checks value alomg with datatype no conversion
