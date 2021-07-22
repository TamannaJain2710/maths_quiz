class Button{
    constructor(value,x,y){
        this.button = createButton(value);
        this.button.position(x,y);
        this.value = value;
        this.x =x;
        this.y = y;
        this.button.style('background', 'lightgrey');
    }
}