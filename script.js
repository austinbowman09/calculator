let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = null;

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener('click', selectButtonAction);
});

function selectButtonAction() {
    if (this.classList.contains("number-button")) {
        numberEntered(this.dataset.value);
    } else if (this.classList.contains("operator-button")) {
        operatorEntered(this.dataset.value);
    } else if (this.classList.contains("misc-button")) {
        miscEntered(this.dataset.value);
    }
}

function numberEntered(number) {
    if(!operator) {
        if(!firstNumber) {
            firstNumber = parseInt(number);
        } else {
            firstNumber = parseInt(firstNumber.toString() + number.toString());
        }
        updateDisplayValue(firstNumber);
    } else {
        if(!secondNumber) {
            secondNumber = parseInt(number);
        } else {
            secondNumber = parseInt(secondNumber.toString() + number.toString());
        }
        updateDisplayValue(secondNumber);
    } 
}

function operatorEntered(entry) {
    if(entry != "=") {
        operator = entry;
        updateDisplayValue(operator);
    } else {
        result = operate(operator,firstNumber,secondNumber);
        updateDisplayValue(result);
    }

}

function miscEntered(entry) {
    console.log("Miscellaneous button functionality still needs to be added...")
}

function storeValue() {
    let value = this.dataset.value;
    if(typeof(parseInt(value)) == "number") {
        if(!firstNumber) {
            firstNumber = value;
        } else if(!secondNumber) {
            secondNumber = value;
        } else {
            console.log("Both numbers are already populated");
        }
    } else if(typeof(value) == "string") {
        if(value == "+" || value == "-" || value == "*" || value == "/" || value == "=") {
            operator = value;            
        } else {
            console.log("unrecognized operator");
        }
    } else {
        console.log("unrecognized datatype");
    }
    updateDisplayValue(firstNumber);
}

function appendToDisplayValue(char) {
    if(displayValue) {
        displayValue = displayValue.toString() + char.toString();
    } else {
        displayValue = char.toString();
    }
    updateDisplayValue(displayValue);
}

function clearDisplayValue() {
    displayValue = 0;
    updateDisplayValue(displayValue);
}

function updateDisplayValue(textToDisplay) {
    const displayField = document.querySelector("#display");
    displayField.textContent = textToDisplay;
}

function addition(a,b) {
    return a+b;
}

function subtraction(a,b) {
    return a-b;
}

function multiplication(a,b) {
    return a*b;
}

function division(a,b) {
    return a/b;
}

function operate(operator,a,b) {
    let result = 0;
    switch(operator) {
        case '+':
            result = addition(a,b);
            break;
        case '-':
            result = subtraction(a,b);
            break;
        case '*':
            result = multiplication(a,b);
            break;
        case '/':
            result = division(a,b);
            break;
    }
    return result;
}