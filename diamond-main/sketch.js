var thief, thiefImage;
var background, backgroundImage;
var arrow, arrowImage, arrowGroup;
var fruit, fruit1, fruit2, fruit3, fruitGroup;
var hut, hutImage;
var castle, castleImage;
var ground;

function preload(){
    thiefImage = loadAnimation("sprites/run1.png","sprites/run2.png","sprites/run3.png","sprites/run4.png","sprites/run5.png","sprites/run6.png")
    backgroundImage = loadImage("sprites/background.jpg")
    arrowImage = loadImage("sprites/arrow.png")
    fruit1 = loadImage("sprites/orange.jpeg")
    fruit2 = loadImage("sprites/fruit 2.png")
    fruit3 = loadImage("sprites/apple.jpeg")
    castleImage = loadImage("sprites/castle.jpeg")
    hutImage = loadImage("sprites/hut 1.jpeg")
}

function setup(){
    createCanvas(2000,1000)
    ground = createSprite(1000,980,2000,20)
    thief = createSprite(50,975,10,40)
    thief.addAnimation("running",thiefImage)
}

function draw(){
    background("pink")
    drawSprites()
}