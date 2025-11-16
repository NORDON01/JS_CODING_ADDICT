const log = console.log;

const products = [
    {title:'Modern poster'},
    {title:'Bar stool'},
    {title:'Armchair'},
    {title:'Leather chair'}
];log(products);

const text = 'a';

const result = products.filter((item) => 
    item.title.toLowerCase().includes(text)); //Ne pas utiliser {} après =>
log(result);            //0: {title: 'Bar stool'}
                        //1: {title: 'Armchair'}
                        //2: {title: 'Leather chair'}

