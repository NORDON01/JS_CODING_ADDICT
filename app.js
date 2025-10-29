const log = console.log;    //global scope

const btn = document.querySelector('.increment'); log(btn);
 
const counter = {
  count:0,
  increment(){
    log(this);
    this.count++
    log(this.count);
  }
}

let compteur = counter.increment.bind(counter);//!!!

btn.addEventListener('click', compteur);