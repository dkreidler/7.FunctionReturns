var input = document.querySelector('.numberInput');
var para = document.querySelector('p');

function squared(num) {
    return num * num;
}

function cubed(num) {
    return num * num * num;
}

function factorial(num) {
    var x = num;
    while (x > 1) {
        num *= x - 1;
        x--;
    }
    return num;
}

function squareRoot(num) {
    return Math.sqrt(num);
}

function cubeRoot(num) {
    return Math.cbrt(num);
}

function perimeter(num) {
    return num * 2 * Math.PI;
}


input.onchange = function() {
    var num = input.value;
    if (isNaN(num)) {
        para.textContent = 'You need to enter a number!';

    } else {
        para.innerHTML = num + ' squared is ' + squared(num) + '. <br /> ' +
            num + ' cubed is ' + cubed(num) + '. <br />' +
            num + ' factorial is ' + factorial(num) + '. <br />' +
            'The square root of ' + num + ' is ' + squareRoot(num) + '. <br />' +
            'The cube root of ' + num + ' is ' + cubeRoot(num) + '. <br />' +
            'A cirle with radius ' + num + ' has a perimeter of ' + perimeter(num) + '.';
    }
}