const moradores = [{
    nome: "João",
    torre: 1,
    apartamento: 01,
    andar: 0
  },
  {
    nome: "Lucas",
    torre: 1,
    apartamento: 02,
    andar: 0
  },
  {
    nome: "Victória",
    torre: 1,
    apartamento: 11,
    andar: 1
  },{
    nome: "Miguel",
    torre: 1,
    apartamento: 12,
    andar: 1
  },{
    nome: "Alípio",
    torre: 2,
    apartamento: 01,
    andar: 0
  },{
    nome: "Lorena",
    torre: 2,
    apartamento: 02,
    andar: 0
  },{
    nome: "Jairo",
    torre: 2,
    apartamento: 11,
    andar: 1
  },{
    nome: "Jerusa",
    torre: 2,
    apartamento: 12,
    andar: 1
}];

const tableBody = document.getElementById ("body-table");
function show(){
    for(let i = 0; i < moradores.length; i ++){
        tableBody.innerHTML += `<tr><td>${moradores[i].nome}</td><td><button type="button" onclick="present()">Confirmar presença</button></td></tr>`;
    }
}

function present() {
    
}