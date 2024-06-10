// const date = new Date();
// console.log(date);

const tables = {
    noOfLegs: 4,
    color: 'white',
    material: 'plastics',
    isFoldable: true,
    height: 0.7,
}

console.log(tables.isFoldable);
tables['colorOfLegs'] = 'grey';
tables['width'] = 1.2
 
console.log(tables.colorOfLegs + ' ' + tables.material + ' ' + tables.width)