//Declaração dos dados constantes de cada competidor
const maxpedro = 230;
const minpedro = 150;
const drpedro = 0.03;
const maxjuca = 260;
const minjuca = 120;
const drjuca = 0.05;
const maxedna = 220;
const minedna = 180;
const dredna = 0.01;

function randomspeed(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function run(laps) {
    let pedroscore=0;
    let jucascore=0;
    let ednascore=0;
    document.getElementById("results").innerHTML="";
    for(n=0; n<laps; n++) {
        let speedpedro = (randomspeed (minpedro, maxpedro))*(1-drpedro);
        let speedjuca = (randomspeed (minjuca, maxjuca))*(1-drjuca);
        let speededna = (randomspeed (minedna, maxedna))*(1-dredna);
        if (speedpedro>speedjuca && speedpedro>speededna) {
            pedroscore++;
        }
        else {
            if (speedjuca>speedpedro && speedjuca>speededna) {
                jucascore++;
            }
            else {
                ednascore++;
            }
        }
        if (n===laps-1) {
            if (pedroscore>jucascore && pedroscore>ednascore) {
                let paragraph1 = document.createElement ("p");
                document.getElementById("results").appendChild (paragraph1);
                paragraph1.innerHTML=`1º lugar - Pedro - ${pedroscore}`;
                if (jucascore>ednascore) {
                    let paragraph2 = document.createElement ("p");
                    document.getElementById("results").appendChild (paragraph2);
                    paragraph2.innerHTML=`2º lugar - Juca - ${jucascore}`;
                    let paragraph3 = document.createElement ("p");
                    document.getElementById("results").appendChild (paragraph3);
                    paragraph3.innerHTML=`3º lugar - Edna - ${ednascore}`;
                }
                else {
                    let paragraph2 = document.createElement ("p");
                    document.getElementById("results").appendChild (paragraph2);
                    paragraph2.innerHTML=`2º lugar - Edna - ${ednascore}`;
                    let paragraph3 = document.createElement ("p");
                    document.getElementById("results").appendChild (paragraph3);
                    paragraph3.innerHTML=`3º lugar - Juca - ${jucascore}`;
                }
            }
            else {
                if (jucascore>pedroscore && jucascore>ednascore) {
                    let paragraph1 = document.createElement ("p");
                    document.getElementById("results").appendChild (paragraph1);
                    paragraph1.innerHTML=`1º lugar - Juca - ${jucascore}`;
                    if (pedroscore>ednascore) {
                        let paragraph2 = document.createElement ("p");
                        document.getElementById("results").appendChild (paragraph2);
                        paragraph2.innerHTML=`2º lugar - Pedro - ${pedroscore}`;
                        let paragraph3 = document.createElement ("p");
                        document.getElementById("results").appendChild (paragraph3);
                        paragraph3.innerHTML=`3º lugar - Edna - ${ednascore}`;
                    }
                    else {
                        let paragraph2 = document.createElement ("p");
                        document.getElementById("results").appendChild (paragraph2);
                        paragraph2.innerHTML=`2º lugar - Edna - ${ednascore}`;
                        let paragraph3 = document.createElement ("p");
                        document.getElementById("results").appendChild (paragraph3);
                        paragraph3.innerHTML=`3º lugar - Pedro - ${pedroscore}`;
                    }
                }
                else if (ednascore>pedroscore && ednascore>jucascore){
                    let paragraph1 = document.createElement ("p");
                    document.getElementById("results").appendChild (paragraph1);
                    paragraph1.innerHTML=`1º lugar - Edna - ${ednascore}`;
                    if (pedroscore>jucascore) {
                        let paragraph2 = document.createElement ("p");
                        document.getElementById("results").appendChild (paragraph2);
                        paragraph2.innerHTML=`2º lugar - Pedro - ${pedroscore}`;
                        let paragraph3 = document.createElement ("p");
                        document.getElementById("results").appendChild (paragraph3);
                        paragraph3.innerHTML=`3º lugar - Juca - ${jucascore}`;
                    }
                    else {
                        let paragraph2 = document.createElement ("p");
                        document.getElementById("results").appendChild (paragraph2);
                        paragraph2.innerHTML=`2º lugar - Juca - ${jucascore}`;
                        let paragraph3 = document.createElement ("p");
                        document.getElementById("results").appendChild (paragraph3);
                        paragraph3.innerHTML=`3º lugar - Pedro - ${pedroscore}`;
                    }
                }
                else {
                    laps++;
                }
            } 
        }
    }
}

