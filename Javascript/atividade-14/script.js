const debts = []; //Vetor que armazena as informações das dívidas
let customers = {}; //Objeto que armazenará as informações de cada cliente
let informationName = [];

function add() { 
    const name = document.getElementById ("name").value; 
    const date =  new Date(document.getElementById ("date").value); 
    const price = parseFloat(document.getElementById ("debt").value);
    if (name == "" || date == "Invalid Date" || isNaN(price)){ //Verifica se algum dos inputs não foi inserido, se algum estiver vazio, pedirá que insira todos os campos
        let paragraph = document.createElement("p");
        document.getElementById("error").appendChild(paragraph);
        paragraph.innerHTML = "Insira todas as informações necessárias";
    }
    else { //Todos os elementos foram inseridos
        document.getElementById("error").innerHTML="";
        let dateFormat = (addZero((date.getDate()+1).toString()) + "/" + (addZero(date.getMonth()+1).toString()) + "/" + date.getFullYear()); //converte a data para o formato: dd/mm/yyyy
        customers = {client: name, date: dateFormat, price: price};
        const mora = 2;
        const day = 0.1;
        const actualDate = new Date (); 
        const Difference_In_Days = parseInt((actualDate.getTime() - date.getTime()) / (1000 * 3600 * 24));
        if (Difference_In_Days > 0) {
            customers.interestRate = mora + Difference_In_Days*day; //taxa de juros
            customers.valueInterestRate = customers.interestRate/100 * customers.price; //valor dos juros
            customers.amount = customers.price + customers.valueInterestRate; //Total
        }
        else {
            customers.interestRate = 0;
            customers.valueInterestRate = 0;
            customers.amount = customers.price; 
        }
        debts.push (customers); 
        drawRow();
        document.getElementById("name").value = "";
        document.getElementById("date").value = "";
        document.getElementById("debt").value = "";
    }
}

function joinName(){ //Agrupa as dívidas por nome do cliente
    if (debts.length === 0){
        document.getElementById("insertEmpty").innerHTML = "Insira as informações dos clientes primeiro";
    } else {
        document.getElementById("insertEmpty").innerHTML = "";
        console.log(debts);
        let groupName = join (debts, 'client'); //Objeto com grupos separados por nomes
        let groupNameArray = Object.values(groupName); //Array que Aramazena os objetos de mesmo nome em outro array [[{obj1}{obj2}],[{obj3}]]
        groupNameArray.forEach(sumValue);
        console.log(groupNameArray);
    }
}

function joinDate(){ //Agrupa as dívidas por data de vencimento
    if (debts.length === 0){
        document.getElementById("insertEmpty").innerHTML = "Insira as informações dos clientes primeiro";
    } else {
        document.getElementById("insertEmpty").innerHTML = "";
        console.log(debts);
        let groupDate = join (debts, 'date'); //Objeto com grupos separados por datas
        let groupDateArray = Object.values(groupDate); //Array que Aramazena os objetos de mesma data em outro array [[{obj1}{obj2}],[{obj3}]]
        groupDateArray.forEach(sumValue);
        console.log(groupDateArray);
    }
}

function sumValue (element) { //Faz a soma do total por cliente ou por data de vencimento e armazena em um vetor para impressão
    let sumName = element.reduce( function (acc, current) {
        return acc + current.amount; 
    },0);
    console.log(element)
    document.getElementById("list").innerHTML = "";
    element.forEach(drawTableName);
    let totalName = `<tr><td></td><td></td><td></td><td></td><td></td><td><strong>${symbolMoney(sumName)}</strong></td></tr>`;
    informationName.push (totalName);
    console.log(informationName);
    document.getElementById("list").innerHTML = informationName.join("");
}

function drawTableName (item) {
    informationName.push(`<tr>
    <td>${item.client}</td>
    <td>${item.date}</td>
    <td>${symbolMoney(item.price)}</td>
    <td>${item.interestRate}%</td>
    <td>${symbolMoney(item.valueInterestRate)}</td>
    <td>${symbolMoney(item.amount)}</td>
    </tr>`)
}

function join(objArray,property){ 
    return objArray.reduce(function(newArray,objInsideArray){
        let key = objInsideArray[property];
        if(!newArray[key]) {
            newArray[key] = [];
        }
        newArray[key].push(objInsideArray);
        return newArray;
    }, {});
}

function symbolMoney (price){ //Converte os valores para real
    return price.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    });
}

function addZero(number){ //Adiciona zero na data
    if (number <= 9) 
    return "0" + number;
    else
    return number; 
}

function drawRow () { //Desenha a tabela com as informações inseridas
    let row = debts.map(function(item){
    return `<tr>
                <td>${item.client}</td>
                <td>${item.date}</td>
                <td>${symbolMoney(item.price)}</td>
                <td>${item.interestRate}%</td>
                <td>${symbolMoney(item.valueInterestRate)}</td>
                <td>${symbolMoney(item.amount)}</td>
            </tr>`;
    });
document.getElementById("list").innerHTML = row.join("");
}

