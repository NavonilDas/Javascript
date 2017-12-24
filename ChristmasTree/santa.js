function Santa(){
    this.image; // Image Object
    this.speed = 0.8;
    // Change Width and height
    this.w = 921/4; 
    this.h = 674/4;
    this.x = 0;
    this.y = 0;
    this.setup = ()=>{
        this.image = new Image();
        this.image.src = 'Santa.png';
    }
    this.draw = ()=>{
        ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
        this.update();
    }
    // Change The Position
    this.update = ()=>{
        this.x += this.speed;
        if(this.x > w) this.x = -this.w;
    }
}