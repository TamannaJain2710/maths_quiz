const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var lp,EB;
var start = 2;
var loading = 1;
var gameState = loading;
function preload(){
    lp = loadImage("loadingpic.jpg");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    engine = Engine.create();
    world = engine.world;
    //EB = new Button('Start',displayWidth/2,displayHeight/2 + 20)
}

function draw(){
    Engine.update(engine);
    
    if (gameState === loading){
        background(lp);
        if(frameCount % 30 == 0 ){
            gameState = start
        }
    } else if(gameState === start){
        background("pink");
        textSize(10);
        text("Enter Number 1:");
    }   
    drawSprites();
}