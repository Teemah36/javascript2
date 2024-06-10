let age = Number(prompt('type in your age'));
let nationality = prompt('What country are you from')

// we use conditional to check
if (age >= 18 && nationality === 'Nigeria' || nationality === 'nigeria'){
    alert('yes you can vote.')
} else {
    alert('you are not eligible to vote')
}