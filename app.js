const log = console.log;    //global scope

function newAccount(name, newBalance){
  let balance = newBalance;
  function showBalance(){
    log(`${name}, your balance is ${balance}`);
  }

  function deposit(amount){
    balance += amount; 
  }

  function withDraw(amount){
    if((balance - amount) < 0 ){log('Balance is insufficient');}
    else{balance -= amount}
    } 
    return {showBalance: showBalance, deposit:deposit, withDraw:withDraw};
  }

/* log(newAccount('Georges', 1000)());
log(newAccount('Hélène', 2000)()); */
// Suite
const alice = newAccount('Alice', 3000);
log(alice);
alice.showBalance();
alice.deposit(1000);
alice.showBalance();
alice.withDraw(500);
alice.showBalance();
alice.withDraw(5000);
