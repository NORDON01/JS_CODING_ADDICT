const log = console.log;

const bob = {
    fname:'Bob',
    lname:'Sanders',
    city:'Chicago',
    siblings:{
        sister:'jane',
    },
}

const {
    fname: prénom,
    lname,
    city,
    siblings:{sister:soeur}
} = bob;

log(prénom, lname, city, soeur);
