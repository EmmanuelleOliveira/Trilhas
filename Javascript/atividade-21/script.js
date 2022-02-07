$(document).ready(function(){
    $("#number-one, #number-two").focus(function(){
        $(this).css("background-color", "#f09c96a1");
    });
    $("input").blur(function(){
        $(this).css("background-color", "white");
    });
}) 

let op = "";
let result = "";

function add () {
    op = document.getElementById("add").value;
}

function sub () {
    op = document.getElementById("sub").value;
}

function mult () {
    op = document.getElementById("mult").value;
}

function div () {
    op = document.getElementById("div").value;
}

function rst () {
    let result 
    let numberone = document.querySelectorAll(".numbers")[0].value;
    let numbertwo = document.querySelectorAll(".numbers")[1].value;
    numberone = parseFloat (numberone, 10);
    numbertwo = parseFloat (numbertwo, 10);
    if (numberone === "") {
        document.getElementById("result").innerHTML="Insira o primeiro número";
    }
    else {
        if (numbertwo === "") {
            document.getElementById("result").innerHTML="Insira o segundo número";
        }
        else {
            switch (op) {
                case "+": 
                    result = numberone + numbertwo;
                    document.getElementById("result").innerHTML=result;
                    break;
                case "-": 
                    result = numberone - numbertwo;
                    document.getElementById("result").innerHTML=result;
                    break;
                case "*": 
                    result = numberone * numbertwo; 
                    document.getElementById("result").innerHTML=result;
                    break;
                case "/":
                    result = numberone / numbertwo; 
                    document.getElementById("result").innerHTML=result;
                    break;
                default:
                    document.getElementById("result").innerHTML="Insira o operador";
                    break;
            }
        }
    }
}

function clr () {
    op = "";
    result = "";
    document.getElementById("result").innerHTML="";
}
