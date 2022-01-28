function multiply(multiplier, ...numbers) {
    return numbers.map(function(element) {
        return multiplier * element;
    });
}

console.log(multiply(5,4,2,7,5,6,9,3,10,25)); 

function filterEvenNumbers(...vector) {
    return vector.filter(function(element) {
        return element % 2 === 0;
    });
}

console.log(filterEvenNumbers(10,15,23,46,4,25,48,7,9,6,320)); 