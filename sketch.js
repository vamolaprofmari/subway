var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg, JakeImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
 
pathImg = ladImage("path.png");

JakeImg = loadAnimation("assests/Jake1.png", 
"assests/Jake2.png",

 "assests/jake3.png",

 "assests/jake4.PNG");







}

function setup(){
  
  createCanvas(400,400);


path =createSprite(200,200,50,50);
path.addAnimation(pathImg);
path.velocityY= 5;

boy =createSprite(300,200,30,30);
boy.addAnimation("JakeRunning", JakeImg);
boy.velocityY= -5;





 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

//crie um sprite de menino
//adicione uma animação de corrida para ele
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=false;
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x=World.mouseX;
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);

  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
