function createMultiplier(_opOne) {
    return function multiply (_opTwo){
        return _opOne * _opTwo;
    }
}

let multiplyBy5 = createMultiplier(5);

console.log (multiplyBy5(10));
console.log (multiplyBy5(12));
console.log (multiplyBy5(7));

