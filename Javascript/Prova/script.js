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

const tableBody = document.getElementById("body-table");
const tableBody2 = document.getElementById("moradores-presentes");

function show() {
  moradores.forEach(function(value, index) {
    tableBody.innerHTML += `<tr><td>${value.nome}</td><td>${value.torre}</td><td>${value.apartamento}</td><td>${value.andar}</td><td><button type="button" id="btn${index}" onclick="present(${index})">Confirmar presença</button></td></tr>`;
  })
  document.getElementById("list-closed").addEventListener("click", closedList);
}

const moradoresPresentes = [];

function present(i) {
  moradoresPresentes.push(moradores[i]);
  document.getElementById(`btn${i}`).disabled = true;
}

function closedList() {
  moradoresPresentes.forEach(function(value, index) {
    tableBody2.innerHTML += `<tr><td>${value.nome}</td><td>${value.torre}</td><td>${value.apartamento}</td><td>${value.andar}</td></tr>`;
  })
  document.getElementById(`list-closed`).disabled = true;
}

show();
