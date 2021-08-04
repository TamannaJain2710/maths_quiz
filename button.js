class Button{
    constructor(){
       /* this.next = createButton('next');
        this.next.position(displayWidth/2+50,displayHeight/2+130);
        this.next.style('background', 'lightgrey');
        this.next.style('font-size', '15px');
        this.next.hide()*/
        this.check = createButton('Check');
        this.check.position(displayWidth/2+50,displayHeight/2+80);
        this.check.style('background', 'lightgrey');
        this.check.style('font-size', '20px'); 
        this.input = createInput('answer')
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
                //this.next.show();
            }else if(this.input.value() != q){
                background("red");
                text("Wrong",displayWidth/2+50,displayHeight/2+120)
            }
        })
    }
    
}