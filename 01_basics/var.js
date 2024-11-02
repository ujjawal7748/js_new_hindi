const accountId=464656546;
var accountEmail="sbdh@gmail.com";
let accountPaswword="sb44dhsh";
accountCity="Jaipur";

// If we declare a vaiable without a value in it then javascript assign its value as undefined.
let accountState;

// A constant cannot be updated as its value is always fixed once declared in javascript
// accountId=44646;
// console.log(accountId);

/*
We should not use var to declare a variable
because of issue in functional scope and block scope
*/
 
console.log(accountEmail);
accountEmail="dhsbhdbib@gmail.com";
console.log(accountEmail);
console.table([accountId, accountEmail, accountPaswword, accountCity, accountState]);
