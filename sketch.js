var raquete
var ruimimg 
var bomimg
var bonusimg
var blocosruins
var blocosbons
var bloquinho
var pontuacao=1
var tempo;
var gameTime;
var endTime


var gameStart= "wait"

function preload (){
ruimimg=loadImage ("RUINS.png")
bomimg=loadImage ("BONS.png")
bonusimg=loadImage("BONUS.png")
fonte=loadFont("SixtyfourConvergence-Regular.ttf")

}


function setup() { 
  createCanvas(800,800)
  raquete = createSprite(400, 750, 80, 20)
  raquete.shapeColor="purple"
  
 edges=createEdgeSprites() 

 startTime = millis()


 bloquinho=new Group()
 blocosruins=new Group()
 blocosbons=new Group()

 

}

function draw() {
  background ("pink")

  textFont(fonte)


if(gameStart==="wait"){
  fill("black")
  textSize(40)

textAlign(CENTER, CENTER)

  text("JOGO IMPOSSIVEL", width/2, 400 )
  fill("black")
  textSize(25)

  text("Jogue com as setas", width/2, 450 )
  fill("black")
  textSize(25)

  text("Pressione espaço para começar", width/2, 500 )
  fill("black")
  textSize(15)

if(keyDown("space")){
gameStart="play";

}

}else if(gameStart==="play"){
drawSprites()


gameTime = Math.floor((millis()-startTime)/1000)

fill("black")
textSize(20)
text("Pontuação: "+pontuacao, 350, 720 )

 fill("black")
 textSize(20)
  text("Tempo: "+gameTime, 50, 50) 

  bons ()
  ruins ()
  bonus ()

  if (keyDown("right")) {
    raquete.position.x+=8
      }
     
      if(keyDown("left")) {
        raquete.position.x-=8
      }

      blocosruins.forEach(ruim => {

        if (raquete.overlap(ruim)) {
    
       pontuacao--
      ruim.remove()}})
    
    
      blocosbons.forEach(bom => {
        if (raquete.overlap(bom)) {
       pontuacao++
      bom.remove()
    console.log("test")
        }
        
      })
      bloquinho.forEach(BONUS => {
        if (raquete.overlap(BONUS)) {
       pontuacao+=5
      BONUS.remove()
    
        }
        
      })

      if(pontuacao <=0){
        gameStart="gameOver"
        EndTime=gameTime

      }

    

}else if(gameStart==="gameOver"){

  textAlign(CENTER, CENTER)


  fill("black")
  textSize(20)
  text("Pontuação: "+pontuacao, width/2, 720 )
 
  fill("black")
 textSize(20)
  text("Tempo:"+EndTime, width/2, 50)


  fill("red")
  textSize(20)
  text("FIM DE JOGO!", width/2,400)


  fill("green")
  text("Pressione espaço para tentar novamente", width/2, 450 )
  textSize(40) // tempo acabar lá e mudar fonte destruir sprites e recomeçar

if(keyDown("space")){
gameStart="play";
pontuacao=1
gameTime=0

startTime=millis()

bloquinho.removeSprites()
blocosruins.removeSprites()
blocosbons.removeSprites()



}
}

raquete.bounceOff(edges)
 

  
}

function ruins( ) {
if (frameCount%10===0) { // que se a quantidade de quadros for 10... % = módulo
for (var RUINS1=0;RUINS1<4;RUINS1++) {
  var ruim=createSprite(random(20, 780), 0, 10,10)
  ruim.addImage(ruimimg)
  ruim.velocityY=random(5,10)
  ruim.scale=0.35
  ruim.lifetime=150
  blocosruins.add(ruim)
  
}
}

}
function bons( ) {

    if (frameCount%20===0) { // que se a quantidade de quadros for 10... % = módulo
    for (var BONS1=0;BONS1<5;BONS1++)  {
  
  var bom=createSprite(random(20, 780), 0, 10,10)
  bom.addImage(bomimg)
  bom.velocityY=random(5,10)
  bom.scale=0.35
  blocosbons.add(bom)

  if (bom.isTouching(edges[3])) { 
  bom.destroy() 
 }

}
}
}

function bonus( ) {

    if (frameCount%300===0) { // que se a quantidade de quadros for 10... % = módulo
    for (var BONUS1=0;BONUS1<1;BONUS1++) {
        var BONUS=createSprite(random(20, 780), 0, 10,10)

      BONUS.addImage(bonusimg)
    BONUS.velocityY=random(8,10)
    BONUS.scale=0.50
    BONUS.lifetime=150
    bloquinho.add(BONUS)
  }

}
}




















































































































































































