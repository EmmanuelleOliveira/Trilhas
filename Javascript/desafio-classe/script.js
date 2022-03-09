class Hero {
  constructor(_name, _type, _st, _agi, _int) {
    this.name = _name //Nome
    this.type = _type //Tipo
    this.st = _st		 //Força
    this.agi = _agi	 //Agilidade
    this.int = _int	 //Inteligência
    this.hp = this.st*2 + 50//Pontos de Vida
    this.newHp = this.hp;
    this.def = this.agi + 2 //Defesa
    this.atkPower = 5 //Ataque base 
    this.atkPowerSpecial = 10 //Ataque especial
  };

  dmgUp() { //Função que determina o dano sofrido ao oponente de acordo com a maior habilidade do personagem que está atacando no modo de ataque normal
      /*	
        Types: 
      1 - Agility
      2 - Strength
      3 - Intelligence
    */
    switch (this.type) {
      case 1:
        return this.atkPower + (this.range (0, this.agi));
        break;

      case 2:
        return this.atkPower + (this.range (0, this.st));
        break;

      case 3:
        return this.atkPower + (this.range (0, this.int));
        break;
    };
  };

  specialDmgUp() { //Função que determina o dano sofrido ao oponente de acordo com a maior habilidade do personagem que está atacando no modo de ataque especial
    switch (this.type) {
      case 1:
        return this.atkPowerSpecial + (this.range (0, this.agi));
        break;

      case 2:
        return this.atkPowerSpecial + (this.range (0, this.st));
        break;

      case 3:
        return this.atkPowerSpecial + (this.range (0, this.int));
        break;
    };
  };

  attackTry() { //Função que retorna um valor para atacar o oponente de acordo com a maior habilidade do personagem que está realizando o ataque
      switch (this.type) {
          case 1:
            this.try = this.range(1,15) + this.agi;
            return this.try;
            break;
    
          case 2:
              this.try = this.range(1,15) + this.st;
              return this.try;
            break;
    
          case 3:
              this.try = this.range(1,15) + this.int;
              return this.try;
            break;
      };
  };

  hpDown(dmgValue){ //Função que retorna o valor dos pontos de vida ao retirar o dano causado pelo ataque do oponente
    return this.newHp -= dmgValue;
  };

  range (min, max){ //Função que sorteia números aleatórios que é utilizada dentro da classe
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  hpUp (healing) {
    return this.newHp += healing;
  };
}

//Construção dos personagens
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

//Armazenamento dos personagens em um vetor (objeto com suas propriedades)
const characters = [dean, sam, castiel, crowley, bob, lucifer, rowena, death, meg, gabriel, jo];
//Armazenamento dos nomes dos personagens para chamada do ID
const pictures = ["dean", "sam", "castiel", "crowley", "bob", "lucifer", "rowena", "death", "meg", "gabriel", "jo"]; 

//Armazenamento dos áudios do jogo em constantes
const initialPageAudio = new Audio ("./assets/audio/spn.mp3");
const battleAudio = new Audio ("./assets/audio/battle.mp3");
const winAudio = new Audio ("./assets/audio/road.mp3");
const atk = new Audio ("./assets/audio/atk.mp3");
const missatk = new Audio ("./assets/audio/missatk.mp3");
const heal = new Audio ("./assets/audio/heal.mp3");

//Reprodução do áudio ao entrar na página, definição de volume e loop
initialPageAudio.play();
initialPageAudio.volume = 0.2;
initialPageAudio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);

//Esconde o botão iniciar até que um personagem esteja selecionado
$("#start").hide();

//Declaração das variáveis globais 
let positionPlayer = '';
let positionOponent = '';
let newHpPlayerWidth = 51;
let newHpOponentWidth = 51;
let countPlayerAttack = 0;
let countOponentAttack = 0;
let healingPlayer = 1;
let healingOponent = 1;

//Função que gera valores aleatórios para ser sorteado um personagem oponente
function rangeRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Função que insere o nome do personagem na página inicial ao passar o mouse sobre a imagem correspondente
function info(characterInfo) {
  $(`#${characterInfo}`).text(`${characterInfo}`); 
}

//Função que remove o nome do personagem na página inicial ao retirar o mouse da imagem correspondente
function removeInfo(characterInfo) {
  $(`#${characterInfo}`).text(``); 
}

//Função que armazena a posição do personagem escolhido pelo jogador e mostra o botão iniciar em seguida
function show (position) {
  positionPlayer = position; 
  $("#start").show();
};

//Função que monta a página de batalha ao clicar no botão de iniciar
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
  $(`<div id = 'hps'><div id = 'hp-player'><b>${pictures[positionPlayer]}</b><div id = 'hp-player-internal'><div id = 'hp-player-external'></div></div></div><div id = 'spn-symbol' class = 'hp-images'></div><div id = 'hp-oponent'><b>${pictures[positionOponent]}</b><div id = 'hp-oponent-internal'><div id = 'hp-oponent-external'></div></div></div></div>`).appendTo("#background-battle");
  $(`<div id = 'oponents-pictures'><div class = "character" id=${pictures[positionPlayer]}></div><div id = "versus">VS</div><div class = "character" id=${pictures[positionOponent]}></div></div>`).appendTo("#background-battle");
  $(`<div id = 'turn'></div>`).appendTo("#background-battle");
  $(`<div id = 'btn-player'><button type="button" class = "btn" id="attack-btn" onclick = 'fightPlayer()'>Atacar!</button><button type="button" class = "btn" id="special-btn" onclick = 'fightPlayerSpecial()'>Ataque especial!</button><button type="button" class = "btn" id="healing-btn" onclick = 'healingTry("player")'>Curar</button></div>`).appendTo("#background-battle");
  $(`<div id = 'result'></div>`).appendTo("#background-battle");
  $("#turn").html("Sua vez de jogar");
  checkSpecialAttack ();
  checkHealingTry (newHpPlayerWidth);
});

//Função que cria um oponente aleatório para a máquina que seja diferente da escolha do jogador
function createOponent () {
  let i = rangeRandom (0,10);
  while (i === positionPlayer){
    i = rangeRandom (0,10);
  }
  positionOponent = i;
};

//Função que aumentará os pontos de vida de forma aleatória;
function checkHealingTry (lifePoints){
  if (healingPlayer === 1 && lifePoints <= 50) {
    $("#healing-btn").show();
  } else {
    $("#healing-btn").hide();
  };
};

//Verifica se o jogador acertou 3 ataques normais no oponente para liberar o botão de ataque especial
function checkSpecialAttack (){
  if (countPlayerAttack < 3) {
    $("#special-btn").hide();
  } else {
    $("#special-btn").show();
  }
}

//Função que aumentará os pontos de vida de forma aleatória;
function healingTry(namePlayer) {
  const btnAttack = document.getElementById("attack-btn");
  btnAttack.disabled = true;
  const btnSpecialAttack = document.getElementById("special-btn");
  btnSpecialAttack.disabled = true;
  $("#healing-btn").hide();
  let healingPx = rangeRandom(10,50);
  if (namePlayer === "oponent") {
    newHpOponentWidth += healingPx;
    let conversionHP = ((healingPx * characters[positionOponent].hp)/300);
    newHpOponent = characters[positionOponent].hpUp(conversionHP);
    heal.play();
    $("#result").html(`${characters[positionOponent].name} recupera alguns pontos de vida depois de ser curado por Deus`);
    $("#hp-oponent-external").css('width', newHpOponentWidth);
    healingOponent = 0;
    btnAttack.disabled = false;
    btnSpecialAttack.disabled = false;
    $("#turn").html("Sua vez de jogar");
  } else {
    newHpPlayerWidth += healingPx;
    let conversionHP = ((healingPx * characters[positionPlayer].hp)/300);
    newHpPlayer = characters[positionPlayer].hpUp(conversionHP);
    heal.play();
    $("#hp-player-external").css('width', newHpPlayerWidth);
    healingPlayer = 0;
    $("#result").html(`${characters[positionPlayer].name} recupera alguns pontos de vida depois de ser curado por Deus`)
    btnSpecialAttack.disabled = false;
    $("#turn").html("Vez do oponente jogar");
    if (newHpOponentWidth <=50 && healingOponent === 1) {
      setTimeout (()=>healingTry("oponent"),4000);
    } else if (countOponentAttack < 3){ 
      setTimeout(oponentTurn,4000);
    } else {
      setTimeout(oponentTurnSpecial,4000);
    }
  }
};

//Movimentos do jogador no ataque normal
function fightPlayer () {
  const btnAttack = document.getElementById("attack-btn");
  btnAttack.disabled = true;
  if (characters[positionOponent].newHp > 0) { 
    let attackTryPlayer = characters[positionPlayer].attackTry(); //Número de ataque do jogador
    let defenseTry = characters[positionOponent].def; //Número de defesa do oponente
    if (attackTryPlayer > defenseTry){ //Verifica se acertou o ataque para remover o dano
      let damage = characters[positionPlayer].dmgUp(); //Número do dano causado
      let newHpOponent = characters[positionOponent].hpDown(damage); //Número do valor atualizado dos pontos de vida após o dano
      //Atualização da barra de vida, mostra o resultado e incrementa o contador de ataques bem sucedidos 
      newHpOponentWidth = (300*(newHpOponent)/characters[positionOponent].hp); 
      $("#hp-oponent-external").css('width', newHpOponentWidth);
      atk.play();
      $(`#oponents-pictures #${pictures[positionOponent]}`).effect("shake", {times:1} ,500);
      $("#result").html(`${characters[positionPlayer].name} acertou o ataque em ${characters[positionOponent].name} e causou um dano de ${damage}`);
      countPlayerAttack++;
    } else { //Não acertou o ataque
      missatk.play();
      $("#result").html(`${characters[positionPlayer].name} não acertou o ataque em ${characters[positionOponent].name}`);
    }
  };
  if (characters[positionOponent].newHp > 0){ //Verifica término do jogo ou se é a vez da máquina no modo de ataque normal ou especial
    $("#turn").html("Vez do oponente jogar");
    if (newHpOponentWidth <=50 && healingOponent === 1) {
      setTimeout (()=>healingTry("oponent"),4000);
    } else if (countOponentAttack < 3){ 
      setTimeout(oponentTurn,4000);
    } else {
      setTimeout(oponentTurnSpecial,4000);
    }
  } else {
    setTimeout(() => winner (positionPlayer), 3000); 
  }  
};

//Movimentos do jogador no ataque especial
function fightPlayerSpecial (){
  const btnAttack = document.getElementById("attack-btn");
  btnAttack.disabled = true;
  $("#special-btn").hide();
  countPlayerAttack = 0;
  if (characters[positionOponent].newHp > 0) {
    let attackTryPlayer = characters[positionPlayer].attackTry(); 
    let defenseTry = characters[positionOponent].def; 
    if (attackTryPlayer > defenseTry){ 
      let damage = characters[positionPlayer].specialDmgUp();
      let newHpOponent = characters[positionOponent].hpDown(damage);
      newHpOponentWidth = (300*(newHpOponent)/characters[positionOponent].hp);
      $("#hp-oponent-external").css('width',newHpOponentWidth);
      atk.play();
      $(`#oponents-pictures #${pictures[positionOponent]}`).effect("shake",{times:1},500);
      $("#result").html(`${characters[positionPlayer].name} acertou o ataque especial em ${characters[positionOponent].name} e causou um dano de ${damage}`);
    } else { //Não acertou o ataque
      missatk.play();
      $("#result").html(`${characters[positionPlayer].name} não acertou o ataque especial em ${characters[positionOponent].name}`);
    }
  };
  if (characters[positionOponent].newHp > 0){ 
    $("#turn").html("Vez do oponente jogar");
    if (newHpOponentWidth <=50 && healingOponent === 1) {
      setTimeout (()=> healingTry("oponent"),4000);
    } else if (countOponentAttack < 3){
      setTimeout(oponentTurn,4000);
    } else {
      setTimeout(oponentTurnSpecial,4000);
    };
  } else {
    setTimeout(() => winner (positionPlayer), 3000); 
  } 
}

//Movimento da máquina no modo de ataque normal
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
      atk.play();
      $(`#oponents-pictures #${pictures[positionPlayer]}`).effect("shake",{times:1},500);
      $("#result").html(`${characters[positionOponent].name} acertou o ataque em ${characters[positionPlayer].name} e causou um dano de ${damage}`);
      countOponentAttack++;
    } else {
      missatk.play();
      $("#result").html(`${characters[positionOponent].name} não acertou o ataque em ${characters[positionPlayer].name}`);
    }
    if (characters[positionPlayer].newHp <= 0){
      setTimeout(() => winner (positionOponent), 3000); 
    } else {
      $("#turn").html("Sua vez de jogar");
      btnAttack.disabled = false;
      checkSpecialAttack();
      checkHealingTry (newHpPlayerWidth);
    }
  }
};

//Movimento da máquina no modo de ataque especial 
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
      atk.play();
      $(`#oponents-pictures #${pictures[positionPlayer]}`).effect("shake",{times:1},500);
      $("#result").html(`${characters[positionOponent].name} acertou o ataque especial em ${characters[positionPlayer].name} e causou um dano de ${damage}`);
    } else {
      missatk.play();
      $("#result").html(`${characters[positionOponent].name} não acertou o ataque especial em ${characters[positionPlayer].name}`);
    }
    if (characters[positionPlayer].newHp <= 0){
      setTimeout(() => winner (positionOponent), 3000); 
    } else {
      $("#turn").html("Sua vez de jogar");
      btnAttack.disabled = false;
      checkSpecialAttack();
      checkHealingTry (newHpPlayerWidth);
    }
  }
};

//Montagem da página de vitória
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