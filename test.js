const log = console.log;

const headings = document.querySelectorAll('h1'); 
log(headings);  //Displays a node list which cannot take map() method
const result = document.getElementById('result');

const text = [...headings]
.map(item => `<span>${item.textContent}</span>`)
.join(" ");

result.innerHTML = text;