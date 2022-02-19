class Hero {
    constructor(name, type, st, agi, int) {
      this.name = name //Nome
      this.type = type //Tipo
      this.st = st		 //Força
      this.agi = agi	 //Agilidade
      this.int = int	 //Inteligência
      this.hp = this.st*2 + 50//Pontos de Vida
      this.sp = 0 //Contador para utilizar ataque especial
      this.def = this.agi + 5 //Defesa
      this.try = 0
      this.atkPower = 5 //Ataque base soco
      this.atkPowerSpecial = 10 //Ataque especial
    }
    /*
        Método que ajusta os pontos de ataque do personagem com base no seu tipo
    */
    dmgUp() {
        /*	
          Types: 
        1 - Agility
        2 - Strength
        3 - Intelligence
      */
      switch (this.type) {
        case 1:
          this.atkPower += this.agi
          break;
  
        case 2:
          this.atkPower += this.st
          break;
  
        case 3:
          this.atkPower += this.int
          break;
      }
    }
    attackTry(){
        switch (this.type) {
            case 1:
              this.try = range(1,15) + this.agi
              return this.try
              break;
      
            case 2:
                this.try = range(1,15) + this.st
                return this.try
              break;
      
            case 3:
                this.try = range(1,15) + this.int
                return this.try
              break;
        }
    }
}

const dean = new Hero ("Dean",1,4,3,2); 
const sam = new Hero ("Sam",3,3,3,5);
const castiel = new Hero ("Castiel",1,5,4,2);
const crowley = new Hero ("Crowley",2,2,5,4);
const bob = new Hero ("Bob",3,1,2,4);
const lucifer = new Hero ("Lucifer",3,4,1,5);
const rowena = new Hero ("Rowena",3,2,3,5);
const death = new Hero ("Death",2,3,5,2);
const meg = new Hero ("Meg",2,2,4,3);
const jo = new Hero ("Jo",2,1,2,1);
const gabriel = new Hero ("Gabriel",3,4,4,5);

const characters = [dean, sam, castiel, crowley, bob, lucifer, rowena, death, meg, gabriel, jo];
const pictures = ["dean", "sam", "castiel", "crowley", "bob", "lucifer", "rowena", "death", "meg", "gabriel", "jo"]; 

function range(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startBtn = document.getElementById("start");
startBtn.disabled = true;
let positionPlayer = '';
let player = '';
let oponent = '';
let positionOponent = '';

function show (position) {
    startBtn.disabled = false;
    positionPlayer = position; 
    player = characters[position];
}

$("#start").click(function(){
    $("#choose-characters").toggle("fade");
    $("body").css({"background-image":'URL("./assets/images/angels.png")'});
    $("<div id='background-battle'></div>").appendTo("main");
    $("main").css({"justify-content":"flex-start", "align-items":"center", "gap":"30px"});
    createOponent();
    console.log(player);
    console.log(oponent);
    fightConstruction();
});

function createOponent () {
    const i = range (0,10);
    console.log(i)
    console.log(positionPlayer)
    while (i === positionPlayer){
        createOponent ();
        console.log(i)
        console.log(positionPlayer)
    }
    positionOponent = i;
    oponent = characters[i];
}

function fightConstruction() {
    $(`<div id = 'oponents-pictures'><div class = "character" id=${pictures[positionPlayer]}></div><div id = "versus">VS</div><div class = "character" id=${pictures[positionOponent]}></div>`).appendTo("#background-battle");
    $(`<div id = 'btnPlayer'><button type="button" class = "btn" id="attack-btn">Atacar!</button><button type="button" class = "btn" id="special-btn">Ataque especial!</button></div>`).appendTo("#background-battle");
}

//<div> id = oponents-pictures </div>


console.log(dean)
let atk = dean.attackTry()
console.log(atk)
atk = dean.attackTry()
console.log(atk)


//FUNCIONAMENTO DO JOGO

//definir aleatório personagem da máquina ok
//quando player atacar, máquina defende com personagem.def
//Vê qual o maior para tirar ou não o atkPower do hp
// se acertar, acrescenta sp
//quando sp for 5, libera ataque especial

//IMPLEMENTAR

//colocar uma div com as fotos dos oponentes ok
//div com botões de ataque, defesa e ataque especial
//div com resultado da jogada 
//div com hp
  