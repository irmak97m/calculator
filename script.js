console.log("hello world!");


const clearBtn = document.querySelector("#clear");
const operatorArray = document.querySelectorAll(".operator");
const numberArray = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const history = document.querySelector("#history");

//calculations

function add(a,b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function percentage(a,b) {
    return a * b / 100 ;
}

function plusMinusFunc(a) {
    return a * -1;
}

function operate(operator, leftVal,rightVal) {
    switch (operator) {
        case "+":
            return add(leftVal,rightVal);
            break;
        case "-":
            return substract(leftVal,rightVal)
            break;
        case "*":
            return multiply(leftVal,rightVal)
            break;
        case "/":
            if (rightVal !== 0) {
                return divide(leftVal,rightVal)
            } else {
                return "You can't divide to zero";
            }
            break;
        case "%":
            return percentage(leftVal,rightVal);
            break;
        case "+/-":
            if (leftVal !==undefined 
                && rightVal == undefined) {
                return plusMinus(leftVal);
            };
            break;
    };
};

numberArray.forEach(number => {
    number.addEventListener("click", () => {
        display.textContent += number.textContent;
    });
});

operatorArray.forEach(operator => {
    operator.addEventListener("click", () => {
        display.textContent += operator.textContent;
    })
})
