const log = console.log;

const groceries = [ 'jam', 'milk', 'butter', 'flour'];
const grocery = 'jam';

let isIncluded = false;

isIncluded = groceries.includes(grocery);
log(isIncluded);            //true

isIncluded = groceries.includes(grocery, 1);
log(isIncluded);            //false: starting at position 1

if(groceries.includes(grocery)){
    log(`Yes ${grocery} is on the list !`)
}