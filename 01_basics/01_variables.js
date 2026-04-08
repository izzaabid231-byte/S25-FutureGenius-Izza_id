const accountId = 12345678
let accountEmail = "izzaabid@google.com"
var accountPassword = "786"
accountCity = "Multan"
let accountState
// accountId = 2 

accountEmail = "gxsqgfdy@gmail.com"
accountCity = "lahore"
accountPassword = "3456"

console.log(accountId);

/*
prefer not to use var
because of issue in block scopeand functional scope
*/
console.table([accountId, accountCity, accountEmail, accountPassword, accountState])

