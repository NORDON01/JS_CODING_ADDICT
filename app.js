const log = console.log;    //global scope

//Regular function
const bob = {
 fname:"Bob",
 lname: "Smith", 
 sayName:function(){
    log(this);
    log(`Hello my name is ${this.fname} ${this.lname}`);
 }
}

//Arrow function
const anna = {
 fname:"Anna",
 lname: "Sanders", 
 sayName:() => {
    log(this);              //Points to Windows
    log(`Hello my name is ${this.fname} ${this.lname}`);
 }
}

bob.sayName();
anna.sayName();