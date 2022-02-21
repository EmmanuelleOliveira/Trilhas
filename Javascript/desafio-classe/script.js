class Hero {
    constructor(name, type, st, agi, int) {
      this.name = name //Nome
      this.type = type //Tipo
      this.st = st		 //Força
      this.agi = agi	 //Agilidade
      this.int = int	 //Inteligência
      this.hp = this.st*2 + 50//Pontos de Vida
      this.newHp = this.hp;
      this.def = this.agi + 2 //Defesa
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
          return this.atkPower + (range (0, this.agi));
          break;
  
        case 2:
          return this.atkPower + (range (0, this.st));
          break;
  
        case 3:
          return this.atkPower + (range (0, this.int));
          break;
      }
    }
    specialDmgUp() {
      switch (this.type) {
        case 1:
          return this.atkPowerSpecial + (range (0, this.agi));
          break;
  
        case 2:
          return this.atkPowerSpecial + (range (0, this.st));
          break;
  
        case 3:
          return this.atkPowerSpecial + (range (0, this.int));
          break;
      }
    }

    attackTry() {
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

    hpDown(dmgValue){
      return this.newHp -= dmgValue;
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

const initialPageAudio = new Audio ("./assets/audio/spntema.mp3");
const battleAudio = new Audio ("./assets/audio/battle.mp3");
const winAudio = new Audio ("./assets/audio/road.mp3");
initialPageAudio.play();
initialPageAudio.volume = 0.2;
initialPageAudio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);

function range(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

$("#start").hide();
let positionPlayer = '';
let positionOponent = '';
let newHpOponentWidth = 1;
let countPlayerAttack = 0;
let countOponentAttack = 0;

function info(characterInfo) {
  $(`#${characterInfo}`).text(`${characterInfo}`); 
}

function removeInfo(characterInfo) {
  $(`#${characterInfo}`).text(``); 
}

function show (position) {
  positionPlayer = position; 
  $("#start").show();
};

$("#start").click(function(){
  $("#choose-characters").hide();
  initialPageAudio.pause();
  battleAudio.play();
  battleAudio.volume = 0.2;
  battleAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
  $("body").css({"background-image":'URL("./assets/images/angels.png")'});
  $("<div id='background-battle'></div>").appendTo("main");
  $("main").css({"justify-content":"flex-start", "align-items":"center", "gap":"30px", "color":"#dbb4a6"});
  createOponent();
  fightConstruction();
});
  
function createOponent () {
  let i = range (0,10);
  while (i === positionPlayer){
    i = range (0,10);
  }
  positionOponent = i;
};
  
function fightConstruction() {
  $(`<div id = 'hps'><div id = 'hp-player'><b>${pictures[positionPlayer]}</b><div id = 'hp-player-internal'><div id = 'hp-player-external'></div></div></div><div id = 'spn-symbol' class = 'hp-images'></div><div id = 'hp-oponent'><b>${pictures[positionOponent]}</b><div id = 'hp-oponent-internal'><div id = 'hp-oponent-external'></div></div></div></div>`).appendTo("#background-battle");
  $(`<div id = 'oponents-pictures'><div class = "character" id=${pictures[positionPlayer]}></div><div id = "versus">VS</div><div class = "character" id=${pictures[positionOponent]}></div></div>`).appendTo("#background-battle");
  $(`<div id = 'turn'></div>`).appendTo("#background-battle");
  $(`<div id = 'btn-player'><button type="button" class = "btn" id="attack-btn" onclick = 'fightPlayer()'>Atacar!</button><button type="button" class = "btn" id="special-btn" onclick = 'fightPlayerSpecial()'>Ataque especial!</button></div>`).appendTo("#background-battle");
  $(`<div id = 'result'></div>`).appendTo("#background-battle");
  $("#turn").html("Sua vez de jogar");
  checkSpecialAttack ();
};

function checkSpecialAttack (){
  if (countPlayerAttack < 3) {
    $("#special-btn").hide();
  } else {
    $("#special-btn").show();
  }
}

function fightPlayer () {
  const btnAttack = document.getElementById("attack-btn");
  btnAttack.disabled = true;
  if (characters[positionOponent].newHp > 0) { 
    let attackTryPlayer = characters[positionPlayer].attackTry(); //Número de ataque do jogador
    let defenseTry = characters[positionOponent].def; //Número de defesa do oponente
    if (attackTryPlayer > defenseTry){ //Verifica se acertou o ataque para remover o dano
      let damage = characters[positionPlayer].dmgUp();
      let newHpOponent = characters[positionOponent].hpDown(damage);
      newHpOponentWidth = (300*(newHpOponent)/characters[positionOponent].hp);
      $("#hp-oponent-external").css('width', newHpOponentWidth);
      $("#result").html(`${characters[positionPlayer].name} acertou o ataque em ${characters[positionOponent].name} e causou um dano de ${damage}`);
      countPlayerAttack++;
    } else { //Não acertou o ataque
      $("#result").html(`${characters[positionPlayer].name} não acertou o ataque em ${characters[positionOponent].name}`);
    }
  };
  if (characters[positionOponent].newHp > 0){
    $("#turn").html("Vez do oponente jogar");
    if (countOponentAttack < 3){
      setTimeout(oponentTurn,2000);
    } else {
      setTimeout(oponentTurnSpecial,2000);
    }
  } else {
    winner (positionPlayer);
  }  
};

function fightPlayerSpecial (){
  const btnAttack = document.getElementById("attack-btn");
  btnAttack.disabled = true;
  $("#special-btn").hide();
  countPlayerAttack = 0;
  if (characters[positionOponent].newHp > 0) {
    let attackTryPlayer = characters[positionPlayer].attackTry(); //Número de ataque do jogador
    let defenseTry = characters[positionOponent].def; //Número de defesa do oponente
    if (attackTryPlayer > defenseTry){ //Verifica se acertou o ataque para remover o dano
      let damage = characters[positionPlayer].specialDmgUp();
      let newHpOponent = characters[positionOponent].hpDown(damage);
      newHpOponentWidth = (300*(newHpOponent)/characters[positionOponent].hp);
      $("#hp-oponent-external").css('width',newHpOponentWidth);
      $("#result").html(`${characters[positionPlayer].name} acertou o ataque especial em ${characters[positionOponent].name} e causou um dano de ${damage}`);
    } else { //Não acertou o ataque
      $("#result").html(`${characters[positionPlayer].name} não acertou o ataque especial em ${characters[positionOponent].name}`);
    }
  };
  if (characters[positionOponent].newHp > 0){
    $("#turn").html("Vez do oponente jogar");
    if (countOponentAttack < 3){
      setTimeout(oponentTurn,2000);
    } else {
      setTimeout(oponentTurnSpecial,2000);
    };
  } else {
    winner (positionPlayer);
  } 
}

function oponentTurn () {
  const btnAttack = document.getElementById("attack-btn");
  btnAttack.disabled = true;
  if (characters[positionPlayer].newHp > 0) {
    let attackTryOponent = characters[positionOponent].attackTry();
    let defenseTry = characters[positionPlayer].def;
    if (attackTryOponent > defenseTry){
      let damage = characters[positionOponent].dmgUp();
      let newHpPlayer = characters[positionPlayer].hpDown(damage);
      newHpPlayerWidth = (300*(newHpPlayer)/characters[positionPlayer].hp);
      $("#hp-player-external").css('width',newHpPlayerWidth);
      $("#result").html(`${characters[positionOponent].name} acertou o ataque em ${characters[positionPlayer].name} e causou um dano de ${damage}`);
      countOponentAttack++;
    } else {
      $("#result").html(`${characters[positionOponent].name} não acertou o ataque em ${characters[positionPlayer].name}`);
    }
    if (characters[positionPlayer].newHp <= 0){
      $("#turn").html(`${characters[positionOponent].name} venceu essa batalha`);
      winner (positionOponent);
    } else {
      $("#turn").html("Sua vez de jogar");
      btnAttack.disabled = false;
      checkSpecialAttack();
    }
  }
};

function oponentTurnSpecial () {
  const btnAttack = document.getElementById("attack-btn");
  btnAttack.disabled = true;
  countOponentAttack = 0;
  if (characters[positionPlayer].newHp > 0) {
    let attackTryOponent = characters[positionOponent].attackTry();
    let defenseTry = characters[positionPlayer].def;
    if (attackTryOponent > defenseTry){
      let damage = characters[positionOponent].specialDmgUp();
      let newHpPlayer = characters[positionPlayer].hpDown(damage);
      newHpPlayerWidth = (300*(newHpPlayer)/characters[positionPlayer].hp);
      $("#hp-player-external").css('width',newHpPlayerWidth);
      $("#result").html(`${characters[positionOponent].name} acertou o ataque especial em ${characters[positionPlayer].name} e causou um dano de ${damage}`);
    } else {
      $("#result").html(`${characters[positionOponent].name} não acertou o ataque especial em ${characters[positionPlayer].name}`);
    }
    if (characters[positionPlayer].newHp <= 0){
      $("#turn").html(`${characters[positionOponent].name} venceu essa batalha`);
      winner (positionOponent);
    } else {
      $("#turn").html("Sua vez de jogar");
      btnAttack.disabled = false;
      checkSpecialAttack();
    }
  }
}

function winner (positionWinner) {
  battleAudio.pause(); 
  winAudio.play();
  winAudio.volume = 0.2;
  winAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
  $("#background-battle").hide();
  $("body").css({"background-image":'URL("./assets/images/road.gif")'});
  $(`<div id = 'score'></div>`).appendTo("main");
  $("#score").html(`O vencedor da partida foi ${characters[positionWinner].name}!!`);
}

 
