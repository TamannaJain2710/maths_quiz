const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var lp,EB;
function preload(){
    lp = loadImage("loadingpic.jpg");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    engine = Engine.create();
    world = engine.world;
    EB = new Button('Start',displayWidth/2 - 100,displayHeight/2 + 20)
}

function draw(){
    background(lp);
    Engine.update(engine);
    if(EB.mouseIsPressed()){
        clear();
    }
    drawSprites();
}