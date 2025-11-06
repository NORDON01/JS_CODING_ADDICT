const log = console.log;    //global scope

const person = {
    name: 'Kyle',
    job: 'developer',
    hobbies: ['surfing', 'baking', 'bowling']
}

const result = document.getElementById('result'); log(result);
result.innerHTML = `
<h2>${person.name}</h2>
<p>${person.job}</p>
<ul>${person.hobbies.map(
    item => {return `<li>${item}</li>`}
).join("")}</ul>`