const log = console.log;    //global scope

const fname = 'Bob';
const lname = 'Sanders';
const age = 25;

let phrase = `My ${fname} is ${lname.toUpperCase()} and I am ${age*2} years old`;
log(phrase);
