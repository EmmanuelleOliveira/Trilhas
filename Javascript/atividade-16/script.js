function raffle () {
    let vector = []; //vetor que armazenará os números sorteados
    const raffleResult = document.getElementById ("raffleResult");
    const raffleBtn = document.getElementById("raffleBtn");
    raffleBtn.disabled = true; 
    raffleResult.innerHTML = "";
    let interval = setInterval (raffleStart,1000);
    function raffleStart () {
        if (vector.length<6){ //Verifica se já foram sorteados os 6 números
            const max = 59;
            const min = 1;
            const number = Math.floor (Math.random() * (max - min + 1)) + min; //Sorteia um número entre 1 e 60
            while (vector.indexOf(number) !== -1){ //Verifica se o número sorteado já saiu
                number = Math.floor (Math.random() * (max - min + 1)) + min;
            } 
            vector.push(number);
            raffleResult.innerHTML += `<div id="ball">${vector[vector.length - 1]}</div>`;
        } 
        else {
            clearInterval(interval);
            raffleBtn.disabled = false;
        }
    }
}
