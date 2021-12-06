const carpopular = { name: 'popular', speedmaxmax: 200, speedmaxmin: 180, speedminmax: 130, speedminmin: 110, driftmin: 0.03, driftmax: 0.04, };
const carsport = {
    name: 'sport',
    speedmaxmax: 215,
    speedmaxmin: 195,
    speedminmax: 145,
    speedminmin: 125,
    driftmin: 0.02,
    driftmax: 0.03,
};
const carsupersport =
{
    name: 'super sport',
    speedmaxmax: 230,
    speedmaxmin: 210,
    speedminmax: 160,
    speedminmin: 140,
    driftmin: 0.01,
    driftmax: 0.0175,
};

function randomspeed(min, max) { //velocidade aleatória entre a mínima e a máxima do carro
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomdrift(min, max) {
    return Math.random() * (max - min) + min;
  }

function run(laps) {
    let pedroscore = 0;
    let jucascore = 0;
    let ednascore = 0;
    let pedrocar = new Object();
    let jucacar = new Object();
    let ednacar = new Object();
    document.getElementById("results").innerHTML = "";
    let pedronumbercar = Math.random();
    let jucanumbercar = Math.random();
    let ednanumbercar = Math.random();
    console.log(pedronumbercar)
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
        let speedmaxpedro = (randomspeed(pedrocar.speedmaxmin, pedrocar.speedmaxmax));
        let speedminpedro = (randomspeed(pedrocar.speedminmin, pedrocar.speedminmax));
        let driftpedro = (1 - randomdrift(pedrocar.driftmin,pedrocar.driftmax));
        let speedmaxjuca = (randomspeed(jucacar.speedmaxmin, jucacar.speedmaxmax));
        let speedminjuca = (randomspeed(jucacar.speedminmin, jucacar.speedminmax));
        let driftjuca = (1 - randomdrift(jucacar.driftmin,jucacar.driftmax));
        let speedmaxedna = (randomspeed(ednacar.speedmaxmin, ednacar.speedmaxmax));
        let speedminedna = (randomspeed(ednacar.speedminmin, ednacar.speedminmax));
        let driftedna = (1 - randomdrift(ednacar.driftmin,ednacar.driftmax));
    
        let speedpedro = (randomspeed(speedminpedro, speedmaxpedro))* driftpedro;
        let speedjuca = (randomspeed(speedminjuca, speedmaxjuca))* driftjuca;
        let speededna = (randomspeed(speedminedna, speedmaxedna))* driftedna;
        console.log (speededna,speedjuca, speedpedro)
        if (speedpedro > speedjuca && speedpedro > speededna) {
            pedroscore++;
        }
        else {
            if (speedjuca > speedpedro && speedjuca > speededna) {
                jucascore++;
            }
            else {
                ednascore++;
            }
        }
        if (n === laps - 1) {
            if (pedroscore > jucascore && pedroscore > ednascore) {
                let paragraph1 = document.createElement("p");
                document.getElementById("results").appendChild(paragraph1);
                paragraph1.innerHTML = `1º lugar - Pedro - ${pedroscore}`;
                if (jucascore > ednascore) {
                    let paragraph2 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph2);
                    paragraph2.innerHTML = `2º lugar - Juca - ${jucascore}`;
                    let paragraph3 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph3);
                    paragraph3.innerHTML = `3º lugar - Edna - ${ednascore}`;
                }
                else {
                    let paragraph2 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph2);
                    paragraph2.innerHTML = `2º lugar - Edna - ${ednascore}`;
                    let paragraph3 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph3);
                    paragraph3.innerHTML = `3º lugar - Juca - ${jucascore}`;
                }
            }
            else {
                if (jucascore > pedroscore && jucascore > ednascore) {
                    let paragraph1 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph1);
                    paragraph1.innerHTML = `1º lugar - Juca - ${jucascore}`;
                    if (pedroscore > ednascore) {
                        let paragraph2 = document.createElement("p");
                        document.getElementById("results").appendChild(paragraph2);
                        paragraph2.innerHTML = `2º lugar - Pedro - ${pedroscore}`;
                        let paragraph3 = document.createElement("p");
                        document.getElementById("results").appendChild(paragraph3);
                        paragraph3.innerHTML = `3º lugar - Edna - ${ednascore}`;
                    }
                    else {
                        let paragraph2 = document.createElement("p");
                        document.getElementById("results").appendChild(paragraph2);
                        paragraph2.innerHTML = `2º lugar - Edna - ${ednascore}`;
                        let paragraph3 = document.createElement("p");
                        document.getElementById("results").appendChild(paragraph3);
                        paragraph3.innerHTML = `3º lugar - Pedro - ${pedroscore}`;
                    }
                }
                else if (ednascore > pedroscore && ednascore > jucascore) {
                    let paragraph1 = document.createElement("p");
                    document.getElementById("results").appendChild(paragraph1);
                    paragraph1.innerHTML = `1º lugar - Edna - ${ednascore}`;
                    if (pedroscore > jucascore) {
                        let paragraph2 = document.createElement("p");
                        document.getElementById("results").appendChild(paragraph2);
                        paragraph2.innerHTML = `2º lugar - Pedro - ${pedroscore}`;
                        let paragraph3 = document.createElement("p");
                        document.getElementById("results").appendChild(paragraph3);
                        paragraph3.innerHTML = `3º lugar - Juca - ${jucascore}`;
                    }
                    else {
                        let paragraph2 = document.createElement("p");
                        document.getElementById("results").appendChild(paragraph2);
                        paragraph2.innerHTML = `2º lugar - Juca - ${jucascore}`;
                        let paragraph3 = document.createElement("p");
                        document.getElementById("results").appendChild(paragraph3);
                        paragraph3.innerHTML = `3º lugar - Pedro - ${pedroscore}`;
                    }
                }
                else {
                    laps++;
                }
            }
        }
    }
    document.getElementById ("pedro").innerHTML = "O carro de Pedro é: " + pedrocar.name;
    document.getElementById ("edna").innerHTML = "O carro de Edna é: " + ednacar.name;
    document.getElementById ("juca").innerHTML = "O carro de Juca é: " + jucacar.name;
}