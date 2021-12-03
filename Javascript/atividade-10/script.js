let initialgame = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
]
let count = 1;
let winner = 0;

function move(l, c, id) {
    if (count % 2 != 0) { //vez do jogador 1
        if (initialgame[l][c] == "") { //verifica se a posição está vazia
            initialgame[l][c] = "O"; //se estiver vazia, coloca O
            count++; //passa a vez para o jogador 2
            document.getElementById(id).innerHTML = '<img src="./assets/images/circle.png"/>' //Coloca a imagem do círculo
        }
    }
    else {
        if (initialgame[l][c] == "") { //verifica se a posição está vazia
            initialgame[l][c] = "X"; //se estiver vazia, coloca X
            count++; //passa a vez para o jogador 1
            document.getElementById(id).innerHTML = '<img src="./assets/images/x.png"/>' //Coloca a imagem do X
        }
    }
    if (count > 5) { //verifica condições de vitória
        for (i = 0; i < 3; i++) {
            if (initialgame[i][0] === "O" && initialgame[i][1] === "O" && initialgame[i][2] === "O") { //vitória em linha do círculo
                document.getElementById("results").innerHTML = "O vencedor é: O";
                initialgame = [
                    ["end", "end", "end"],
                    ["end", "end", "end"],
                    ["end", "end", "end"],
                ]
                winner=1;
            } else if (initialgame[i][0] === "X" && initialgame[i][1] === "X" && initialgame[i][2] === "X") {
                document.getElementById("results").innerHTML = "O vencedor é: X"; //vitória em linha do x
                initialgame = [
                    ["end", "end", "end"],
                    ["end", "end", "end"],
                    ["end", "end", "end"],
                ]
                winner=1;
            } else if (initialgame[0][i] === "O" && initialgame[1][i] === "O" && initialgame[2][i] === "O") { //vitória em coluna do círculo
                document.getElementById("results").innerHTML = "O vencedor é: O";
                initialgame = [
                    ["end", "end", "end"],
                    ["end", "end", "end"],
                    ["end", "end", "end"],
                ]
                winner=1;
            } else if (initialgame[0][i] === "X" && initialgame[1][i] === "X" && initialgame[2][i] === "X") { //vitória em coluna do x
                document.getElementById("results").innerHTML = "O vencedor é: X";
                initialgame = [
                    ["end", "end", "end"],
                    ["end", "end", "end"],
                    ["end", "end", "end"],
                ]
                winner=1;
            } else if (initialgame[0][0] === "O" && initialgame[1][1] === "O" && initialgame[2][2] === "O" || initialgame[0][2] === "O" && initialgame[1][1] === "O" && initialgame[2][0] === "O") { //vitória em diagonal do círculo
                document.getElementById("results").innerHTML = "O vencedor é: O";
                initialgame = [
                    ["end", "end", "end"],
                    ["end", "end", "end"],
                    ["end", "end", "end"],
                ]
                winner=1;
            } else if (initialgame[0][0] === "X" && initialgame[1][1] === "X" && initialgame[2][2] === "X" || initialgame[0][2] === "X" && initialgame[1][1] === "X" && initialgame[2][0] === "X") { //vitória em diagonal do x
                document.getElementById("results").innerHTML = "O vencedor é: X";
                initialgame = [
                    ["end", "end", "end"],
                    ["end", "end", "end"],
                    ["end", "end", "end"],
                ]
                winner=1;
            } else if (count===10 && winner===0){
                document.getElementById("results").innerHTML = "Empate";
            }
        }
    }
}

function reset() { //reiniciar o jogo
    initialgame = [ //iniciar a matriz
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
    count = 1; 
    winner = 0;
    for (i=0; i<3; i++){ //apagar jogo para o usuário
        for (j=0; j<3; j++){
            document.getElementById("c"+i+j).innerHTML = "";
            document.getElementById("results").innerHTML = "";
        }
    }
}
