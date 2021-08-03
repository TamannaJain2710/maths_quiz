const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var lp,solve,calculate,check;
var q;
var start = 2;
var loading = 1;
var gameState = loading;
var one;
var two ;
var no = 0;
function preload(){
    lp = loadImage("loadingpic.jpg");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    engine = Engine.create();
    world = engine.world;
    background("yellow");
}

function draw(){
    Engine.update(engine);
    one= Math.round(random(1,1000));
    two = Math.round(random(1,1000));
    
    if (gameState === loading){
        background(lp);
        if(frameCount % 30 == 0 ){
            gameState = start
        }
    } else if(gameState === start){
        solve = new Button('Solve',displayWidth/2,displayHeight/2 - 30);
        calculate = new Button('Calculate',displayWidth/2 - 20,displayHeight/2 + 30)
        solve.solving();
        calculate.calculating();
    }  
    drawSprites();
}