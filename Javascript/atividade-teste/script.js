const lastGames = [];

function raffle () {
    const vector = []; //vetor que armazenará os números sorteados
    const raffleBtn = document.getElementById("raffle-btn");
    const raffleResult = document.getElementById ("raffleResult");
    raffleResult.innerHTML = "";
    raffleBtn.disabled = true; 
    let interval = setInterval (raffleStart,1000);
    function raffleStart () {
        if (vector.length<6){ //Verifica se já foram sorteados os 6 números
            const max = 59;
            const min = 1;
            let number = Math.floor (Math.random() * (max - min + 1)) + min; //Sorteia um número entre 1 e 60
            while (vector.indexOf(number) !== -1){ //Verifica se o número sorteado já saiu
                console.log(number);
                number = Math.floor (Math.random() * (max - min + 1)) + min;
                console.log(number);
            } 
            vector.push(number);
            raffleResult.innerHTML += `<div id="ball">${vector[vector.length - 1]}</div>`;
        } else {
            clearInterval(interval);
            const datas = document.getElementById("datas");
            lastGames.push(vector);
            datas.innerHTML = "";
            for (let i=0; i<lastGames.length;i++) { //for que vai percorrer a matriz e imprime na tabela
                let row = datas.insertRow(i); 
                row.insertCell(-1).innerHTML = `${i+1}`; 
                for (j=0; j<6;j++){
                    row.insertCell(-1).innerHTML = `${lastGames[i][j]}`;
                }
            }
            const frequency = [];
            const numbers = [];
            lastGames.forEach((item,index,arr)=>{
                for(let a=0;a<item.length;a++){
                    let count = 0;
                    for (let b=index;b<arr.length;b++){
                        if(arr[b].indexOf(item[a])!==-1){
                            count++;
                        }
                    }
                    if (count > 1 && numbers.indexOf(item[a])===-1){
                        frequency.push(count);
                        numbers.push(item[a]);
                    }
                }
            });
            for (let n=0;n<frequency.length;n++){ //Coloca os vetores do número mais frequente para o menos frequente
                for(let m=0; m<frequency.length;m++){
                    if (frequency[n]>frequency[m]){
                        let aux = frequency[m];
                        frequency[m]=frequency[n];
                        frequency[n]=aux;
                        aux = numbers[m];
                        numbers[m]=numbers[n];
                        numbers[n]=aux;
                    }
                }
            }
            const numbersFrequency = document.getElementById ("numbers-sequency");
            numbersFrequency.innerHTML = "";
            if (frequency.length !== 0){
                for (let c=0; c<6; c++){
                    if (frequency[c] === undefined){
                        let rowFrequency = numbersFrequency.insertRow(c);
                        rowFrequency.insertCell(-1).innerHTML = "-";
                        rowFrequency.insertCell(-1).innerHTML = "-";
                    } else {
                        let rowFrequency = numbersFrequency.insertRow(c);
                        rowFrequency.insertCell(-1).innerHTML = `${numbers[c]}`;
                        rowFrequency.insertCell(-1).innerHTML = `${frequency[c]}`;
                    }
                }
            }
            raffleBtn.disabled = false;
        }
    }
}


