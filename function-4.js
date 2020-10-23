/* Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square. */

/* 
1. write a function with  two variables - width, length
2. if both variables are given, multiply them to get the area
3. if only one variable is given, multiply it by itself. */

function getArea (width, length) {
    if (width == length) {
        var area = width * width;
        var answer = console.log(`The area of the square is ${area}`);
        return answer;
    } else {
        var area = width * length
        var answer = console.log(`The area of the rectangle is ${area}`);
        return answer;
    }
}

getArea(2, 3);
getArea(2, 2);

/* The above solution works fine, but I have to input both values. I have tried below to make the length an optional argument, but it does not seem to work... */

function getArea (width, length = '') {
    if (length === undefined) {
        var area = width * width;
        var answer = console.log(`The area of the square is ${area}`);
        return answer;
    } else {
        var area = width * length
        var answer = console.log(`The area of the rectangle is ${area}`);
        return answer;
    }
}

getArea(2);
