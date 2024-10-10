var raquete
var ruimimg 
var bomimg
var bonusimg
var blocosruins
var blocosbons
var bloquinho
var pontuacao=1


function preload (){
ruimimg=loadImage ("RUINS.png")
bomimg=loadImage ("BONS.png")
bonusimg=loadImage("BONUS.png")


}


function setup() { 
  createCanvas(800,800)
  raquete = createSprite(400, 750, 80, 20)
  raquete.shapeColor="purple"
  
 edges=createEdgeSprites() 

 bloquinho=new Group()
 blocosruins=new Group()
 blocosbons=new Group()

}

function draw() {
  background ("pink")
  drawSprites()
raquete.bounceOff(edges)
  if (keyDown("right")) {
raquete.position.x+=8
  }
  if(keyDown("left")) {
    raquete.position.x-=8
  }
  bons ()
  ruins ()
  bonus ()
  fill("black")
  textSize(40)
  text("JOGO IMPOSSIVEL", 225, 400 )
  fill("black")
  textSize(25)
  text("Jogue com as setas", 225, 450 )
  fill("black")
  textSize(25)
  text("Pressione espaço para começar", 225, 500 )
  fill("black")
  textSize(20)
  text("Pontuação: "+pontuacao, 350, 720 )
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
  if (frameCount%40===0) { // que se a quantidade de quadros for 10... % = módulo
  for (var BONS1=0;BONS1<5;BONS1++)  {
  
var bom=createSprite(random(20, 780), 0, 10,10)
bom.addImage(bomimg)
bom.velocityY=random(5,10)
bom.scale=0.35
// if (bom.isTouching(edges[3])) { 
// bom.destroy() 
// blocosbons.add(bom) 

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




















































































































































































