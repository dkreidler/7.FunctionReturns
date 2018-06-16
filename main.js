var input = document.querySelector('.numberInput');
var para = document.querySelector('p');

var square = num => num * num;
var cube = num => num * num * num;

function factorial(num) {
    var x = num;
    while (x > 1) {
        num *= x - 1;
        x--;
    }
    return num;
}
var squareRt = num => Math.sqrt(num);
var cubeRt = num => Math.cbrt(num);
var perimeter = num => num * 2 * Math.PI;

input.onchange = function() {
    var num = input.value;
    if (isNaN(num)) {
        para.textContent = 'You need to enter a number!';

    } else {
        para.innerHTML = num + ' squared is ' + square(num) + '. <br /> ' +
            num + ' cubed is ' + cube(num) + '. <br />' +
            num + ' factorial is ' + factorial(num) + '. <br />' +
            'The square root of ' + num + ' is ' + squareRt(num) + '. <br />' +
            'The cube root of ' + num + ' is ' + cubeRt(num) + '. <br />' +
            'A circle with radius ' + num + ' has a perimeter of ' + perimeter(num) + '.';
    }
}

//function squared(num) {
//    return num * num;
//}
//function cubeRoot(num) {
//    return Math.cbrt(num);
//}

//function squareRoot(num) {
//    return Math.sqrt(num);
//}

//function cubed(num) {
//    return num * num * num;
//}