let numberorder = 0;

function send () {
    const bread = document.querySelector('input[name = "breadtype"]:checked').value;
    const meat = document.querySelector('input[name = "meattype"]:checked').value;
    const salad = document.querySelector('input[name = "saladtype"]:checked').value;
    const cheese = document.querySelector('input[name = "cheesetype"]:checked').value;
    let price = parseFloat(bread) + parseFloat(meat) + parseFloat(salad) + parseFloat (cheese); 
    
    const optionbread = document.querySelector('input[name = "breadtype"]:checked').id;
    const optionmeat = document.querySelector('input[name = "meattype"]:checked').id;
    const optionsalad = document.querySelector('input[name = "saladtype"]:checked').id;
    const optioncheese = document.querySelector('input[name = "cheesetype"]:checked').id;

    let listbread="";
    let listmeat="";
    let listsalad="";
    let listcheese="";

    if (optionbread == "bf"){
        listbread = "<li>Pão francês</li>";
    }
    else{
        if (optionbread == "ba"){
            listbread = "<li>Pão australiano</li>";
        }
        else{
            listbread = "<li>Pão de brioche</li>";
        }
    }

    if (optionmeat == "mp"){
        listmeat = "<li>Hambúrguer: Picanha</li>";
    }
    else{
        if (optionmeat == "mc"){
            listmeat = "<li>Hambúrguer: costela</li>";
        }
        else{
            listmeat = "<li>Hambúrguer: vegano</li>";
        }
    }

    if (optionsalad == "sa"){
        listsalad = "<li>Salada: Alface</li>";
    }
    else{
        if (optionmeat == "st"){
            listsalad = "<li>Salada: Tomate</li>";
        }
        else{
            listsalad = "<li>Salada: Sem salada</li>";
        }
    }

    if (optioncheese == "cm"){
        listcheese = "<li>Queijo: Mussarela</li>";
    }
    else{
        if (optionmeat == "cp"){
            listcheese = "<li>Queijo: Prato</li>";
        }
        else{
            listcheese = "<li>Queijo: Cheedar</li>";
        }
    }

    numberorder+=1;
    document.getElementById("order").innerHTML+=`<h2>PEDIDO: # ${numberorder}</h2>`; 
    document.getElementById("order").innerHTML+=listbread;
    document.getElementById("order").innerHTML+=listmeat;
    document.getElementById("order").innerHTML+=listsalad;
    document.getElementById("order").innerHTML+=listcheese;
    document.getElementById("order").innerHTML+="</br>";
    document.getElementById("order").innerHTML+=`<h2>TOTAL R$ ${price}</h2>`;
    document.getElementById("order").innerHTML+="</br>";
}