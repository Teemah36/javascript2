// Array with an Array
// let num = [[1,2], [3,5]];

// console.log(num[1][1]);

// Array within an object
let sample = [
    {name: 'jamiu', id: 12, school: ['unilag',]},
    {name: 'jamiu', id: 20, school: ['OAU', 'uniben', 'buk']},
    {
        name: 'jamiu',
        id: 46,
        school: [
            {
                North: ['BUK','ABU','UNIMAID','FUTM',],
                West: ['UNILAG','OAU','UI','LAUTECCH',],
                East: ['UNN','EBSU','ABSU','UNIZIK',],
                South: ['UNIPORT','UNICAL','UNIUYO','DELSU',],
            }
        ]
    }
]

console.log(sample[1].school[1]);
console.log(sample[2].school[0].North[1]);
console.log(sample[2].school[0].East[3]);
console.log(sample[1].school[2]);
console.log(sample[2].school[0].South[0]);
console.log(sample[2].school[0].East[1]);
console.log(sample[2].school[0].South[1]);
console.log(sample[0].school[1]);
console.log(sample[2].school[0].East[2]);



let input = document.getElementsByTagName('input');
let name = document.getElementById('name');

function displayValue(){
    console.log(input[0].value);
    name.innerHTML = input[0].value;
}