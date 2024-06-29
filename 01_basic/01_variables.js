const accountId = "1451";
let accountEmail = "pragneshnp1430@gmail.com";
var accountPassword = "123456";
accountCity = "Surat";
let accountState;

// accountId = 12; // not allowed

accountEmail = "p@gmail.com";
accountPassword = "com";
accountCity = "vapi";

/* 
Prefer not to use var 
because of issue in block scope and function scope
*/

// console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState]);