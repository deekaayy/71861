const person = {
    name: 'Daniel',
    address: {
        street: 'Vitosha',
        no: 35
    }
}

const person2 = {
    ...person
}

person2.name = 'Todor';
log(perso2.name);

const date = new Date();
const date = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();
const myFormat = `${day}-${month}-${year}`;

log();