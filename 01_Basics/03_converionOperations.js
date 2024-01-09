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
console.log(typeof stringNumber);  

let a="abc"
let b= " def"
console.log(a+b)

let n=1
let p=-(n)
console.log(-1)

console.log("1"+2)  //12
console.log(1+"2")  //12
console.log("1"+2+2)  //122
console.log(1+2+"2")   //32  this is done according to ecma script strandards

console.log(true)      //true
console.log(+true)     //1  (type conversion)
console.log(+"")       //0

let num1,num2,num3
num1=num2=num3=2+2
let gamecounter=100
gamecounter++;               //++gamecounter  //prefix and postfix increment js mdn 
console.log(gamecounter);    //101




