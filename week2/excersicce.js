// excsercise 2
// function convert(minutes){
//     return minutes * 60;
// }

// console.log( convert (5));
// console.log(convert(3));
// console.log(convert(2));

// // excercise 3
// function  addition(num){
//     return num +1
// }

// console.log(addition(0));
// console.log(addition(9));
// console.log(addition(-3));

// function addUpp(number){
//     let sum = 0;
//     for (let count = 1; count <= number; count++){
//         sum = sum + count;
//     }
//     return sum;
// }

//  console.log(addUpp(4))   
//  console.log(addUpp(13))   
//  console.log(addUpp(600))   


// excersise 4
let y = "edabit"
function charCount(i, j){
let total = 0;
    for (let count = 0; count < j.length; count++){
        // console.log(j[count])
        if (j[count] === i){
            total = total + 1;
        }
    }
    return total;
}

console.log(charCount('a','edabit'))
console.log(charCount('c','chamber of secrets'))
console.log(charCount('b','big fat bubble'))
