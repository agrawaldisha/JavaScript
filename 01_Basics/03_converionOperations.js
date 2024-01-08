let score="33"    
let score1="33abc"
let score2=null
let score3=undefined
let score4=true
console.log(typeof score);            //string          //typeof is a keyword
let valueInNumber=Number(score)       //number
console.log(typeof valueInNumber);
let valueInNumber1=Number(score1)     //Nan
console.log(typeof valueInNumber1);
let valueInNumber2=Number(score2) 
console.log(typeof valueInNumber2);  //null =0
let valueInNumber3=Number(score3) 
console.log(typeof valueInNumber3);   // Nan -undefined
let valueInNumber4=Number(score4) 
console.log(typeof valueInNumber4);   //1
 

let isloggedIn=1
let boolloggedin=Boolean(isloggedIn)
console.log(boolloggedin) 

/* 1-true
0-false
"" -false
"a" -true
 string*/

let somenumber=33
let stringnumber=String(somenumber);
console.log(typeof stringNumber);  //