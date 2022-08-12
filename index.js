function dados(){
  var dadoRandom1 = Math.floor(Math.random()*6)+1;
  var dadoRandom2 = Math.floor(Math.random()*6)+1;

  var dado1 = document.querySelector(".img1");
  var dado2 = document.querySelector(".img2");
  var resultado = document.querySelector("h1");

  if(dadoRandom1 === 1){
    dado1.setAttribute("src", "images/dice1.png");
  }else if(dadoRandom1 === 2){
    dado1.setAttribute("src", "images/dice2.png");
  }else if(dadoRandom1 === 3){
    dado1.setAttribute("src", "images/dice3.png");
  }else if(dadoRandom1 === 4){
    dado1.setAttribute("src", "images/dice4.png");
  }else if(dadoRandom1 === 5){
    dado1.setAttribute("src", "images/dice5.png");
  }else{
    dado1.setAttribute("src", "images/dice6.png");
  }

  if(dadoRandom2 === 1){
    dado2.setAttribute("src", "images/dice1.png");
  }else if(dadoRandom2 === 2){
    dado2.setAttribute("src", "images/dice2.png");
  }else if(dadoRandom2 === 3){
    dado2.setAttribute("src", "images/dice3.png");
  }else if(dadoRandom2 === 4){
    dado2.setAttribute("src", "images/dice4.png");
  }else if(dadoRandom2 === 5){
    dado2.setAttribute("src", "images/dice5.png");
  }else{
    dado2.setAttribute("src", "images/dice6.png");
  }

  if (dadoRandom1>dadoRandom2) {
    resultado.innerHTML = "🚩Player 1 Wins!";
  }else if(dadoRandom1<dadoRandom2){
    resultado.innerHTML = "Player 2 Wins!🚩";
  }else {
    resultado.innerHTML = "Draw!";
  }

}
