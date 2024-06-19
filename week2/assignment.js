// craete a funtion that takes an integer and returns true if its divisible by 100, otherwise return fals/e.

// ans

// function divisibleBy100(number) {
//     if (number % 100 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(divisibleBy100(1));
// console.log(divisibleBy100(1000));
// console.log(divisibleBy100(100));



// the 50-30-20 is a simple way to budget, which involves spending 50% of after-tax income on needs, 3o% after tax income on want and 20% after-tax income on saving or paying off debt. giving the after-tax income as ati, what you supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings

// ans

function budgetCalculator(ati) {
    const needs = ati * 0.5;
    const wants = ati * 0.3;
    const savings = ati * 0.2;

    return {
        needs: needs,
        wants: wants,
        savings: savings
    };
}

console.log(budgetCalculator(10000));
console.log(budgetCalculator(50000));
console.log(budgetCalculator(13450));