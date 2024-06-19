const cars = [
    'Mercedes',
    'Bmw',
    'Toyota',
    'Honda',
    'Nissan',
    'Peugeout',
    'Audi',
]
// console.log(cars);

cars[7] = 'Hyundai';
// console.log(cars);
cars[5] = 'ford';
console.log(cars);



for (let count = 0; count < cars.length; count++){
    console.log(cars[count]);
}

console.log(cars);


// for (let count = 0; count < cars.length; count++){
//    if (cars[count] === 'Honda'){
//         console.log(cars[count]);
//         cars[count] = 'Ferrari'
//     }
// }

// How to add things to an array;
cars.push('Rolls royse');
cars.push('posche');
console.log(cars);

cars.pop();
// console.log(cars);
// console.log(cars.pop());
console.log(cars.length)

console.log(cars);