/* 2. Write a function that mimics a SASS mixin, ie. it returns a block of CSS code that can be reused. */

function codeCSS(color, bgcolor, size) {
    console.log(`
    color: ${color};
    background-color: ${bgcolor};
    font-size: ${size}px;`)
}

codeCSS('red', 'white', '20');
codeCSS('blue', 'grey', '16');