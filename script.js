console.log("hello world!");

const display = document.querySelector("#display");

const clearAllBtn = document.querySelector("#clearAll");

clearAllBtn.addEventListener("click", () => {
    display.textContent = "";
});

function getAllInputs() {
    return display.textContent.trim().split(" ");
}

function getLastInput() {
    return getAllInputs()[getAllInputs().length -1]
}

function decimalCheck() {
    if (display.textContent == "" || !isNaN(Number(getLastInput())) == false) {
        return true;
    } else if (!isNaN(Number(getLastInput())) == true){
        return false;
    }
}

//--------------------
const numberInputs = document.querySelectorAll(".number");

numberInputs.forEach(number => {
    number.addEventListener("click", () => {
        if (number.id == "decimal") {
            switch (decimalCheck()) {
                case true:
                    display.textContent += "0.";
                    break;
                case false:
                    if(!getLastInput().includes(".")){
                        display.textContent += number.textContent;
                    }
                    break;
            }
        } else {
            display.textContent += number.textContent;
        }
    });
});

//--------------------
const operatorInputs = document.querySelectorAll(".operator");

operatorInputs.forEach(operator => {
    operator.addEventListener("click", () => {
        switch (operator.id) {
            case "substract":
                display.textContent += operator.textContent;
                break;
        
            default:
                if (!isNaN(Number(getLastInput())) == false) {
                    display.textContent = display.textContent.slice(0, -3) + operator.textContent;
                } else if (display.textContent !== ""){
                    display.textContent += operator.textContent;
                }
                break;
        }
    });
});

//--------------------

function safeEval(expr) {
  if (/^[\d+\-*/ ().%]+$/.test(expr)) {
    return Function('"use strict"; return (' + expr + ')')();
  } else {
    throw new Error("Invalid expression");
  }
}

//--------------------

const resultOperator = document.querySelectorAll(".resultOperator");

resultOperator.forEach(operator => {
    operator.addEventListener("click", () => {
        switch (operator.id) {
            case "result":
                display.textContent = safeEval(display.textContent);
                return display.textContent;
                break;
            case "plusMinus":
                display.textContent = safeEval(display.textContent) * (-1);
                return display.textContent;
                break;
        }
    });
});