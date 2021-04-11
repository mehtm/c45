var helper,helperImage
function preload(){
    groundImage=loadImage("groundImage.png")
    


}

function setup() {
    createCanvas(1200,400)
 helper=createSprite(50,350,20,20)
 ground=createSprite(600,360,1200,20)
 ground.addImage(groundImage)
 ground.velocityX=-2
}

function draw() {
    background("green")
    if (keyDown("space")){
     helper.velocityY=-10
    }
    helper.velocityY=helper.velocityY+0.8
    helper.collide(ground)
    if (ground.x < 0){
        ground.x = ground.width/2;
      }
 drawSprites();
}
