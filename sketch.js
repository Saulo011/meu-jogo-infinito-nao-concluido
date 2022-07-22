//nao estou conseguindo fazer o chao rolar para baixo, para dar o efeito de chao infinito
var barco2,barco2Img;
var iceberg,icebergImg;
var mar1,mar1Img;

function preload(){
 barco2Img = loadImage("barco2.png")
 icebergImg = loadImage("iceberg.png")
 mar1Img = loadImage("mar1.png")
}

function setup() {
 createCanvas (600,400)

  mar1 = createSprite(300,50,600,400)
  mar1.addImage("mar1",mar1Img)
  mar1.scale = 0.8

  barco2 = createSprite(300,320,20,20)
  barco2.addImage(barco2Img);
  barco2.scale = 0.2;

  iceberg = createSprite(100,100,20,20)
  iceberg.addImage(icebergImg)
  iceberg.scale = 0.1;
}

function draw() {

 mar1.velocityY= 1;
 console.log(mar1.Y);

 if (mar1.y<400){
  mar1.y = mar1.width/2;
 }

 background("black")
 textSize(15)
 text("sem titulo",300,100,50,50)

 drawSprites()
}