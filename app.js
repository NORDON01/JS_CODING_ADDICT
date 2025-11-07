const log = console.log;    //global scope

const author = "Some author";
const statement = "Some statement";

const quote = highlight `Here is the statement ${statement} by ${author} and it could not be more true`;
log(quote);

const result = document.getElementById('result'); log(result);
result.innerHTML = quote;

function highlight(text, ...vars){      //rest operator
    log({text, vars});
    const awesomeText = text.map((item, index) => {
        return `${item} <strong class="blue"> ${vars[index] || ""} </strong>`
    })

    return awesomeText.join("");
}