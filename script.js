function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(operator,a,b) {
    let result = 0;
    switch(operator) {
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case '*':
            result = multiply(a,b);
            break;
        case '/':
            result = divide(a,b);
            break;
    }
    return result;
}

console.log(operate('+',2,2));
console.log(operate('-',8,4));
console.log(operate('*',1,4));
console.log(operate('/',16,4));

// console.log(add(2,2));
// console.log(subtract(8,4));
// console.log(multiply(1,4));
// console.log(divide(16,4));