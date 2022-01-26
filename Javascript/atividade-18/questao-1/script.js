function fatorial(n) {
    while (n > 1){ 
        return n * fatorial(n - 1); 
    }
    if (n === 1){ //caso base
        return n;
    } else if (n === 0){ 
        return 1;
    }
}

console.log (fatorial(6));