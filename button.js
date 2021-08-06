class Button{
    constructor(){
        this.next = createButton('next');
        this.next.position(displayWidth/2+50,displayHeight/2+130);
        this.next.style('background', 'lightgrey');
        this.next.style('font-size', '15px');
        this.next.hide()
        this.check = createButton('Check');
        this.check.position(displayWidth/2+50,displayHeight/2+80);
        this.check.style('background', 'lightgrey');
        this.check.style('font-size', '20px'); 
        this.check.hide();
        this.input = createInput('answer')
        this.input.position(displayWidth/2+50,displayHeight/2+40);
        this.input.style('background', 'white');
        this.input.hide();
    }
    solving(){
        this.check.mousePressed(() => { 
            if(this.input.value() == q){
                background("green");
                textSize(25);
                text("correct",displayWidth/2+50,displayHeight/2+120);
                score += 1;
                this.check.hide();
                this.input.hide();
                this.next.show();
            }else if(this.input.value() != q){
                background("red");
                textSize(20);
                text(one + sign + two ,displayWidth/2+50,displayHeight/2+10);
                textSize(25);
                text("Wrong",displayWidth/2+50,displayHeight/2+120)
            }
        })
        this.next.mousePressed(() => {
            clear();
            background("yellow");
            one= Math.round(random(1,1000));
            two = Math.round(random(1,1000));
            text("score:" + " "+ score , displayWidth/2+10,20);
            textSize(20);
            text(one + sign + two ,displayWidth/2+50,displayHeight/2+10);
            this.input.show();
            this.input.value('');
            this.check.show();
            if(sign === '+'){
                q= one+two
            } else if ( sign === '-'){
                q= one-two
            } else if (sign === '*'){
                q= one*two
            } 
            check.solving();
        })
    }

    stage2(){
        
    }
    
}