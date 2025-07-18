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

const operatorInputs = document.querySelectorAll(".operator");
operatorInputs.forEach(operator => {
    operator.addEventListener("click", () => {
        if (isNaN(Number(getLastInput()))) {
            
        }
    });
});  