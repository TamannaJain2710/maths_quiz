class Button{
    constructor(value,x,y){
        this.button = createButton(value);
        this.button.position(x,y);
        this.value = value;
        this.x =x;
        this.y = y;
        this.button.style('background', 'lightgrey');
        this.button.style('font-size', '30px');
        this.check = createButton('Check');
        this.check.position(displayWidth/2+100,displayHeight/2+80);
        this.check.style('background', 'lightgrey');
        this.check.style('font-size', '20px');
        this.check.hide();
        this.add = createButton('Add');
        this.add.position(50,175);
        this.add.style('background', 'lightgrey');
        this.add.style('font-size', '15px');
        this.add.hide();
        this.subtract = createButton('subtract');
        this.subtract.position(100,175);
        this.subtract.style('background', 'lightgrey');
        this.subtract.style('font-size', '15px');
        this.subtract.hide();
        this.multiply = createButton('multiply');
        this.multiply.position(175,175);
        this.multiply.style('background', 'lightgrey');
        this.multiply.style('font-size', '15px');
        this.multiply.hide();
        this.divide = createButton('divide');
        this.divide.position(250,175);
        this.divide.style('background', 'lightgrey');
        this.divide.style('font-size', '15px');
        this.divide.hide();
        this.input = createInput('Answer')
        this.input.position(displayWidth/2+100,displayHeight/2+40);
        this.input.hide();
        this.input2 = createInput('First Number')
        this.input2.position(50,75);
        this.input2.hide();
        this.input3 = createInput('Second Number')
        this.input3.position(50,145);
        this.input3.hide();
    }
    solving(){
        this.button.mousePressed(() => {   
        //background("yellow");
        textSize(20);
        text(one + "+" + two ,displayWidth/2+100,displayHeight/2+10);
        q = one + two;
        this.check.show();
        this.input.show();
        this.input3.hide();
        this.add.hide();
        this.subtract.hide();
        this.multiply.hide();
        this.divide.hide();
        this.check.mousePressed(() => { 
            if(this.input.value() == q){
                background("green");
                text("correct",displayWidth/2+100,displayHeight/2+120)
                this.check.hide();
                this.input.hide();
            }else if(this.input.value() != q){
                background("red");
                text("Wrong",displayWidth/2+100,displayHeight/2+120)
            }
        });
        });
    }
    calculating(){
        this.button.mousePressed(() => {
        //background("yellow");
        this.check.hide();
        this.input.hide();
        textSize(20);
        text("Enter first number:",50,50);
        this.input2.show();
        textSize(20);
        text("Enter second number:",50,120);
        this.input3.show();
        this.add.show();
        this.subtract.show();
        this.multiply.show();
        this.divide.show();
        this.add.mousePressed(() => {
            textSize(20);
            text("Answer is " + this.input2.value()+this.input3.value(),50,250);
        });
        this.subtract.mousePressed(() => {
            textSize(20);
            text("Answer is " + this.input2.value()-this.input3.value(),50,250);
        });
        this.multiply.mousePressed(() => {
            textSize(20);
            text("Answer is " + this.input2.value()*this.input3.value(),50,250);
        });
        this.divide.mousePressed(() => {
            textSize(20);
            text("Answer is " + this.input2.value()/this.input3.value(),50,250);
        });
        })
    }
}