var BG 
var cat
var mouse
var catIMG1, catIMG2, catIMG3, catIMG4
var mouseIMG1, mouseIMG2, mouseIMG3, mouseIMG4
function preload() {
    //load the images here
   BG = loadImage("images/garden.png")
   catIMG1 = loadAnimation("images/cat1.png")
   mouseIMG1 = loadAnimation("images/mouse1.png")
   catIMG2 = loadAnimation("images/cat2.png","images/cat3.png" )
   mouseIMG2 = loadAnimation("images/mouse2.png")
   
   mouseIMG3 = loadAnimation("images/mouse3.png")
   catIMG4 = loadAnimation("images/cat4.png")
   mouseIMG4 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600)
    cat.addAnimation("catSitting", catIMG1)
    cat.addAnimation("catRunning", catIMG2)
    cat.scale = 0.2

    mouse = createSprite(200,600)
    mouse.addAnimation("mouseSitting", mouseIMG1)
    mouse.scale = 0.2


}

function draw() {

    background(BG);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("catLastImage", catIMG4)
        cat.changeAnimation("catLastImage")
        cat.x = 300
        cat.scale = 0.2
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseIMG3)
        mouse.changeAnimation("mouseTeasing")
        mouse.frameDelay = 25
        cat.changeAnimation("catRunning")
        cat.velocityX = -5

    }

}
