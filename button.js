class Button{
    constructor(){
        this.check = createButton('Check');
        this.check.position(displayWidth/2+50,displayHeight/2+80);
        this.check.style('background', 'lightgrey');
        this.check.style('font-size', '20px');
        this.input = createInput('Answer')
        this.input.position(displayWidth/2+50,displayHeight/2+40);
        this.input.style('background', 'white');  
    }
    solving(){
        this.check.mousePressed(() => { 
            if(this.input.value() == q){
                background("green");
                text("correct",displayWidth/2+50,displayHeight/2+120)
                this.check.hide();
                this.input.hide();
            }else if(this.input.value() != q){
                background("red");
                text("Wrong",displayWidth/2+50,displayHeight/2+120)
            }
        })
    }
    
}