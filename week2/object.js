// const date = new Date();
// console.log(date);

const tables = {
    noOfLegs: 4,
    color: 'white',
    material: 'plastics',
    isFoldable: true,
    height: 0.7,
}


const fan = {
    color: 'black',
    type: 'standing',
    isFoldable: 'false',
    noOfBlades: 3,
    adjustableHeight: true
}


const television = {}
television ['type'] = 'flatscreen';
television ['size'] = 55;
television ['color'] = 'silver';
television ['make'] = 'startimes';



// console.log(tables.isFoldable);


tables['colorOfLegs'] = 'grey';
tables['width'] = 1.2
 
// console.log(tables.colorOfLegs + ' ' + tables.material + ' ' + tables.width)

const allObjects = {}


for (item in tables) {
    console.log(tables[item])
    allObjects[item] = tables[item];
}

console.log(allObjects)
console.log('\n\n')


for (properties in fan) {
    console.log(fan[properties]);
    allObjects[properties] = fan[properties];
}

console.log('\n\n')

for (item in television) {
    console.log(television[item]);
    allObjects[item] = television[item]; 
    
    // to get the keys we say 
    // console.log(item)
}

console.log(allObjects)



