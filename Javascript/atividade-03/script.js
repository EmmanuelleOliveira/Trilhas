function fillHeader() {
    document.querySelector("h1").innerText="Cão";
}

fillHeader ();

function fillMainSection () {
    document.getElementById("description-title").innerText="Descrição";
    document.querySelectorAll(".description-text")[0].innerText="O nome científico do cão é Canis familiaris. Ele é da mesma família do coiote, do lobo, da raposa e do chacal. É um mamífero com dentes afiados, excelente faro e boa audição. Cada uma de suas quatro pernas termina em um pé, ou pata, com cinco dedos. Cada dedo tem base macia e unha. Uma cobertura de pelos mantém o cão aquecido. Ele se refresca colocando a língua para fora da boca.";
    document.querySelectorAll(".description-text")[1].innerText="Paralelamente a essas características comuns, os cães têm diferentes tamanhos, formas e cores. Os cães que têm tamanho, aparência e comportamento parecidos fazem parte de um grupo chamado raça. Existem mais de quatrocentas raças de cães. Um cão sem raça definida é popularmente chamado de vira-lata.";
    document.querySelectorAll(".description-text")[2].innerText="Há raças de cães muito pequenos e outras de animais muito grandes. Um chiuaua pode pesar 0,5 quilo e ter 13 centímetros de altura. Um dogue alemão pode pesar 68 quilos e ter 76 centímetros de altura.";
    document.getElementById("dog1").src="./assets/images/dog1.png";
    document.querySelectorAll("#picture")[0].src="./assets/images/dog3.jpg";
    document.getElementById("habitat-title").innerText="Habitat";
    document.getElementById("habitat-text").innerText="Por todo o mundo, as pessoas têm cães como bichos de estimação, animais de guarda ou de trabalho. Alguns cães não convivem com os seres humanos e estão soltos na natureza, em alguns lugares do mundo. Esses cachorros normalmente vivem em grupos chamados matilhas.";
    document.getElementById("more").innerText="Saiba mais";
    document.querySelector("#source1").innerText="Wikipédia";
    document.querySelector("#wikipedia").href="https://pt.wikipedia.org/wiki/C%C3%A3o";
    document.querySelector("#wikipedia").target="_blank";
    document.querySelector("#source2").innerText="Tudo sobre cachorros";
    document.querySelector("#aboutdogs").href="https://tudosobrecachorros.com.br/";
    document.querySelector("#aboutdogs").target="_blank";
    document.querySelector("#source3").innerText="Super Interessante";
    document.querySelector("#articlesdogs").href="https://super.abril.com.br/tudo-sobre/cachorro/";
    document.querySelector("#articlesdogs").target="_blank";
}

fillMainSection ();