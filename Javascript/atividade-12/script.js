//Informações dos carros
const carpopular = { name: 'popular', speedmaxmax: 200, speedmaxmin: 180, speedminmax: 130, speedminmin: 110, driftmin: 0.03, driftmax: 0.04, };
const carsport = { name: 'sport', speedmaxmax: 215, speedmaxmin: 195, speedminmax: 145, speedminmin: 125, driftmin: 0.02, driftmax: 0.03, };
const carsupersport = { name: 'super sport', speedmaxmax: 230, speedmaxmin: 210, speedminmax: 160, speedminmin: 140, driftmin: 0.01, driftmax: 0.0175, };
//Jogadores
const players = [{ name: 'Pedro', level: 0, xp: 0 }, { name: 'Juca', level: 0, xp: 0 }, { name: 'Edna', level: 0, xp: 0 }];
function randomspeed(min, max) { //velocidade aleatória entre a mínima e a máxima do carro
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomdrift(min, max) { //Derrapagem aleatória entre a máxima e a mínima
    return Math.random() * (max - min) + min;
}

function level(element, index) { //Verifica se o nível vai aumentar ou se está no 10
    players[index].level = parseInt(players[index].xp/450);
    if (players[index].level > 9) {
        players[index].level = 10;
    }
}

function run(laps) {
    //Iniciando uma modalidade
    let pedroscore = 0;
    let jucascore = 0;
    let ednascore = 0;
    let first = 0;
    let second = 0;
    let third = 0;
    let pedrocar = new Object();
    let jucacar = new Object();
    let ednacar = new Object();
    document.getElementById("results").innerHTML = "";
    if (laps === 10) {
        first = 200;
        second = 120;
        third = 50;
    } else if (laps === 70) {
        first = 220;
        second = 130;
        third = 75;
    } else {
        first = 250;
        second = 150;
        third = 90;
    }
    //Probabilidade do carro aleatória
    let pedronumbercar = Math.random();
    let jucanumbercar = Math.random();
    let ednanumbercar = Math.random();
    //Verificação do carro através da probabilidade anterior
    if (pedronumbercar < 0.6) {
        pedrocar = carpopular;
    } else if (pedronumbercar < 0.95) {
        pedrocar = carsport;
    } else {
        pedrocar = carsupersport;
    }

    if (jucanumbercar < 0.6) {
        jucacar = carpopular;
    } else if (jucanumbercar < 0.95) {
        jucacar = carsport;
    } else {
        jucacar = carsupersport;
    }
    
    if (ednanumbercar < 0.6) {
        ednacar = carpopular;
    } else if (ednanumbercar < 0.95) {
        ednacar = carsport;
    } else {
        ednacar = carsupersport;
    }
    
    for (n = 0; n < laps; n++) {
        //Definição do valor máximo e mínimo da velocidade  e da derrapagem do carro
        let speedmaxpedro = (randomspeed(pedrocar.speedmaxmin, pedrocar.speedmaxmax));
        speedmaxpedro = speedmaxpedro*0.01*players[0].level + speedmaxpedro;
        let speedminpedro = (randomspeed(pedrocar.speedminmin, pedrocar.speedminmax));
        speedminpedro = speedminpedro*0.01*players[0].level + speedminpedro;
        let driftpedro = (1 - randomdrift(pedrocar.driftmin, pedrocar.driftmax));
        let speedmaxjuca = (randomspeed(jucacar.speedmaxmin, jucacar.speedmaxmax));
        speedmaxjuca = speedmaxjuca*0.01*players[1].level + speedmaxjuca;
        let speedminjuca = (randomspeed(jucacar.speedminmin, jucacar.speedminmax));
        speedminjuca = speedminjuca*0.01*players[1].level + speedminjuca;
        let driftjuca = (1 - randomdrift(jucacar.driftmin, jucacar.driftmax));
        let speedmaxedna = (randomspeed(ednacar.speedmaxmin, ednacar.speedmaxmax));
        speedmaxedna = speedmaxedna*0.01*players[2].level + speedmaxedna;
        let speedminedna = (randomspeed(ednacar.speedminmin, ednacar.speedminmax));
        speedminedna = speedminedna*0.01*players[2].level + speedminedna;
        let driftedna = (1 - randomdrift(ednacar.driftmin, ednacar.driftmax));
        //Definição da velocidade do carro
        let speedpedro = (randomspeed(speedminpedro, speedmaxpedro)) * driftpedro;
        let speedjuca = (randomspeed(speedminjuca, speedmaxjuca)) * driftjuca;
        let speededna = (randomspeed(speedminedna, speedmaxedna)) * driftedna;
        //Verificação do ganhador da volta
        if (speedpedro > speedjuca && speedpedro > speededna) {
            pedroscore++;
        } else if (speedjuca > speedpedro && speedjuca > speededna) {
            jucascore++;
        } else {
            ednascore++;
        }
        if (n === laps - 1) { //Última volta, verifica o ranking
            if (pedroscore > jucascore && pedroscore > ednascore) { //Pedro em 1º lugar
                let paragraph1 = document.createElement("p");
                document.getElementById("results").appendChild(paragraph1);
                paragraph1.innerHTML = `1º lugar - Pedro com ${pedroscore} voltas.`;
                players[0].xp += first;
                if (jucascore > ednascore) { //Juca em 2º lugar e Edna em 3º lugar
                    let paragraph2 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph2);
                    paragraph2.innerHTML = `2º lugar - Juca com ${jucascore} volta(s).`;
                    players[1].xp += second;
                    let paragraph3 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph3);
                    paragraph3.innerHTML = `3º lugar - Edna com ${ednascore} volta(s).`;
                    players[2].xp += third;
                } else if (ednascore > jucascore) { //Edna em 2º lugar e Juca em 3º lugar
                    let paragraph2 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph2);
                    paragraph2.innerHTML = `2º lugar - Edna com ${ednascore} volta(s).`;
                    players[2].xp += second;
                    let paragraph3 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph3);
                    paragraph3.innerHTML = `3º lugar - Juca com ${jucascore} volta(s).`;
                    players[1].xp += third;
                } else { //Empate entre Edna e Juca no 2º lugar
                    let paragraph2 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph2);
                    paragraph2.innerHTML = `2º lugar - Juca e Edna com ${ednascore} volta(s) cada.`;
                    players[1].xp += second;
                    players[2].xp += second;
                }
            } else if (jucascore > pedroscore && jucascore > ednascore) { //Juca em 1º lugar
                let paragraph1 = document.createElement("p");
                document.getElementById("results").appendChild(paragraph1);
                paragraph1.innerHTML = `1º lugar - Juca com ${jucascore} voltas.`;
                players[1].xp += first;
                if (pedroscore > ednascore) { //Pedro em 2º lugar e Edna em 3º lugar
                    let paragraph2 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph2);
                    paragraph2.innerHTML = `2º lugar - Pedro com ${pedroscore} volta(s).`;
                    players[0].xp += second;
                    let paragraph3 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph3);
                    paragraph3.innerHTML = `3º lugar - Edna com ${ednascore} volta(s).`;
                    players[2].xp += third;
                } else if (ednascore > pedroscore) { //Edna em 2º lugar e Pedro em 3º lugar
                    let paragraph2 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph2);
                    paragraph2.innerHTML = `2º lugar - Edna com ${ednascore} volta(s).`;
                    players[2].xp += second;
                    let paragraph3 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph3);
                    paragraph3.innerHTML = `3º lugar - Pedro com ${pedroscore} volta(s).`;
                    players[0].xp += third;
                } else { //Empate entre Edna e Pedro no 2º lugar
                    let paragraph2 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph2);
                    paragraph2.innerHTML = `2º lugar - Pedro e Edna com ${ednascore} volta(s) cada.`;
                    players[0].xp += second;
                    players[2].xp += second;
                }
            } else if (ednascore > pedroscore && ednascore > jucascore) { //Edna em 1º lugar
                let paragraph1 = document.createElement("p");
                document.getElementById("results").appendChild(paragraph1);
                paragraph1.innerHTML = `1º lugar - Edna com ${ednascore} voltas.`;
                players[2].xp += first;
                if (pedroscore > jucascore) { //Pedro em 2º lugar e Juca em 3º lugar
                    let paragraph2 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph2);
                    paragraph2.innerHTML = `2º lugar - Pedro com ${pedroscore} volta(s).`;
                    players[0].xp += second;
                    let paragraph3 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph3);
                    paragraph3.innerHTML = `3º lugar - Juca com ${jucascore} volta(s).`;
                    players[1].xp += third;
                }
                else if (jucascore > pedroscore) { //Juca em 2º lugar e Pedro em 3º lugar
                    let paragraph2 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph2);
                    paragraph2.innerHTML = `2º lugar - Juca com ${jucascore} volta(s).`;
                    players[1].xp += second;
                    let paragraph3 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph3);
                    paragraph3.innerHTML = `3º lugar - Pedro com ${pedroscore} volta(s).`;
                    players[0].xp += third;
                } else { //Empate entre Pedro e Juca no 2º lugar
                    let paragraph2 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph2);
                    paragraph2.innerHTML = `2º lugar - Pedro e Juca com ${jucascore} volta(s) cada.`;
                    players[0].xp += second;
                    players[1].xp += second;
                }
            } else { //Caso haja empate no 1º lugar, mais uma volta é jogada
                laps++;
            }
        }
        players.forEach(level);
    }
    document.getElementById("pedro").innerHTML = "O carro de Pedro é: " + pedrocar.name + `. Pedro tem ${players[0].xp} de experiência e está no nível ${players[0].level}.`;
    document.getElementById("juca").innerHTML = "O carro de Juca é: " + jucacar.name + `. Juca tem ${players[1].xp} de experiência e está no nível ${players[1].level}.`;
    document.getElementById("edna").innerHTML = "O carro de Edna é: " + ednacar.name + `. Edna tem ${players[2].xp} de experiência e está no nível ${players[2].level}.`;
}


