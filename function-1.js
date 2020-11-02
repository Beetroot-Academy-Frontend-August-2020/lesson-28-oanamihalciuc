// 1. Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal. //

function compare() {
    var number1 = parseInt(prompt("Please input a number"));
    var number2 = parseInt(prompt("Please input another number"));
    if (number1 < number2) {
        console.log(-1)
    } else if (number1 > number2) {
        console.log(1)
    } else {
        console.log(0)
    }
}

compare();