const accountId=144533
let accountEmail="abc@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState
// const is a keyword value can not be changed 
//accountId=1234  TypeError: Assignment to constant variable.
accountEmail="xyz@gmail.com"
accountPassword="9078"
accountCity="Bengluru"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])
/* 2 ways to declare variables var and const
Var is not used in js bcz earlier scope concept was present ,bcz of block and functional scope
 var can be reinitialized 2 var vaibales with same name can be present in same file*/

//by default the value of accountState is Undefined i.e unintialized value of a variable is undefined 