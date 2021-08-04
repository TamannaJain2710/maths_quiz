const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var lp,solve,check;
var q,input;
var signs = ['+','-','*','/'];
var start = 2;
var loading = 1;
var gameState = loading;
var one;
var two ;
function preload(){
    lp = loadImage("loadingpic.jpg");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    engine = Engine.create();
    world = engine.world;
    background("yellow");
    one= Math.round(random(1,1000));
    two = Math.round(random(1,1000));
    sign = random(signs)
}

function draw(){
    Engine.update(engine);

    if (gameState === loading){
        background(lp);
        if(frameCount % 30 == 0 ){
            gameState = start
        }
    } else if(gameState === start){
        background("yellow");
        textSize(20);
        text(one + sign + two ,displayWidth/2+50,displayHeight/2+10);
        if(sign === '+'){
            q= one+two
        } else if ( sign === '-'){
            q= one-two
        } else if (sign === '*'){
            q= one*two
        } else if(sign === '/'){
            q= one/two
        }
        check = new Button();
        check.solving();
    }  
    drawSprites();
}