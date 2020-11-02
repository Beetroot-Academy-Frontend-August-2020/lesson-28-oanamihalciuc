/* 3. Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149. */

function newNumber() {
    var digit1 = parseInt(prompt("Please input a digit"));
    var digit2 = parseInt(prompt("Please input a second digit"));
    var digit3 = parseInt(prompt("Please input a third digit"));
    if (digit1 <= 0) {
        console.log(`Your number is ${digit2}${digit3}`);
    } 
    else if (digit1 <= 0 && digit2 <= 0) {
        console.log(`Hello number is ${digit3}`);
    }
    else {
        console.log(`Your number is ${digit1}${digit2}${digit3}`);
}
}

newNumber();

/* My 'else if' condition is not working properly (first and second numbers are zero): If I input 0 0 1, the console will print 01 - so it's taking into consideration the first rule. 
How can I correct this?*/ 
