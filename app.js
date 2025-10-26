const log = console.log;    //global scope

const john = {
  fname: 'john',
  lname: 'anderson',
  fullName: function (){
    log(this);
    log(`My full name is ${this.fname} ${this.lname}`);
  },
}

john.fullName();

const bob = {
  fname: 'bob',
  lname: 'sanders',
  fullName: function (){
    log(`My full name is Bob Sanders`);
  },
}