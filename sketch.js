const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var lp,solve,check;
var q,input;
var signs = ['+','-','*'];
var start = 2;
var score = 0;
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
    sign = random(signs)
    check = new Button();
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
        
        one= Math.round(random(1,1000));
        two = Math.round(random(1,1000));
        noLoop();
        text("score" + " "+ score , displayWidth/2+10,20);
        text(one + sign + two ,displayWidth/2+50,displayHeight/2+10);
        check.input.show();
        check.check.show();
        if(sign === '+'){
            q= one+two
        } else if ( sign === '-'){
            q= one-two
        } else if (sign === '*'){
            q= one*two
        } 
        check.solving();
    }  
    drawSprites();
}