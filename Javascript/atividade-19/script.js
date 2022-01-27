//Letra a
function multiplication (numberOne, numberTwo, numberThree, numberFour) {
    return numberOne * numberTwo * numberThree * numberFour;
}

console.log (multiplication (...[10,15,2,4]));

//Letra b

function join (vectorOne, vectorTwo) {
    return ([...vectorOne,...vectorTwo]);
}

console.log (join([1,2,3,4,5],[6,7,8,9,10]));

//Letra c

function maxNumber () {
    const randomVector = random(1,100);
    return Math.max(...randomVector);
}

function random (min,max){
    const vector = [];
    for (let i = 0; i < 10; i++){
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        vector.push (randomNumber);
    }
    return vector;
}

console.log (maxNumber());