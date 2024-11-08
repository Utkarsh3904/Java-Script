const accountId = 14
let accountEmail = "hc@hc.com"
var accountPassword = "123"
accountCity = "jaipur"  // also avoid this method but can be done by this
let accountState;

//use let always, var has issues with functional scope

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
console.log(accountEmail)