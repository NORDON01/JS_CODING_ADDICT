const log = console.log;    //global scope

function newAccount(name, newBalance){
  let balance = newBalance;
  function showBalance(){
    log(`${name}, your balance is ${balance}`);
  }
  return showBalance;
}

log(newAccount('Georges', 1000)());