// let heading = document.getElementById("main-heading").innerHTML = 'new topic';
// heading.innerHTML = 'new topic';



let paragraph = document.getElementsByTagName('P');
// console.log(paragraph[1]);


// To change all the paragraph on the document using for loop and the last paragraph to another statement
// for (let i = 0; i < paragraph.length; i++){
//     if (i === paragraph.length - 1){
//         paragraph[i].innerHTML = 'this thing hard sha'
//     } else {
//         paragraph[i].innerHTML = 'i sabi javascript';
//     }
// }  




// let heading = document.getElementsByClassName("sub-heading");
// console.log(heading[2].innerHTML);


let sub = document.getElementsByClassName('sub-heading');
sub[1].style.color = 'red';