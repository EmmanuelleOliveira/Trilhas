class Calculadora {
    setOperand1(_operand1) {
        this.operand1 = _operand1;
    }
    setOperand2(_operand2) {
        this.operand2 = _operand2;
    }
    setOperation(_operation) {
        this.operation = _operation;
    }
    getResult() {
        console.log (this.operation)
        switch (this.operation){
            case "+": 
                return this.operand1 + this.operand2;
            case "-": 
                return this.operand1 - this.operand2;
            case "*": 
                return this.operand1 * this.operand2;
            case "/": 
                return this.operand1 / this.operand2;
            default:
                return (`<b>Syntax ERROR</b>`);
        }
    }
    clearCalculator() {
        this.operand1 = "";
        this.operand2 = "";
        this.operation = "";
    }
}

const calculator = new Calculadora();

function clearCalculator () { //Função que liga e apaga os dados inseridos na calculadora
    document.getElementById("display").innerHTML = "0";
    calculator.clearCalculator();
    count = 0;
}

function turnOff () { //Função que desliga e apaga os dados inseridos na calculadora
    document.getElementById("display").innerHTML = "";
    calculator.clearCalculator();
}
let operand = [];
let count = 0;
let display = document.getElementById("display");

document.getElementById("zero").addEventListener("click", insertNumber);
document.getElementById("one").addEventListener("click", insertNumber);
document.getElementById("two").addEventListener("click", insertNumber);
document.getElementById("three").addEventListener("click", insertNumber);
document.getElementById("four").addEventListener("click", insertNumber);
document.getElementById("five").addEventListener("click", insertNumber);
document.getElementById("six").addEventListener("click", insertNumber);
document.getElementById("seven").addEventListener("click", insertNumber);
document.getElementById("eight").addEventListener("click", insertNumber);
document.getElementById("nine").addEventListener("click", insertNumber);
document.getElementById("dot").addEventListener("click", insertNumber);
document.getElementById("addition").addEventListener("click", insertOperator);
document.getElementById("subtraction").addEventListener("click", insertOperator);
document.getElementById("multiplication").addEventListener("click", insertOperator);
document.getElementById("division").addEventListener("click", insertOperator); 
document.getElementById("equal").addEventListener("click", result);

function insertNumber () {
    operand.push(this.value);
    if (count === 0){
        display.innerHTML = "";
        count++;
        display.innerHTML += this.value;
    } else{
        display.innerHTML += this.value;
        count++;
    }
}

function insertOperator () {
    const operand1 = Number(operand.join(""));
    calculator.setOperand1(operand1);
    operand = [];
    calculator.setOperation(this.value);
    display.innerHTML = this.value;
    count = 0;
} 

function result () {
    const operand2 = Number(operand.join(""));
    calculator.setOperand2(operand2);
    operand = [];
    const showResult = calculator.getResult();
    display.innerHTML = showResult;
    count = 0;
}

