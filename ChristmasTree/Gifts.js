/* 
    Gift Class
    x,y -> position
    w,h -> width,height
    rw  -> Ribbon Width
    n   -> Colour of box
*/
function Gift(x,y,w,h,rw,n){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ribbon; // ribbon image object
    this.n = n;
    this.rw = rw;
    // Gift Colours
    this.colors = ['#00f','#CECE00','#80FF00','#8000FF'];
    this.setup = ()=>{
        this.ribbon = new Image(); // Initialize the Image Object
        this.ribbon.src = 'Ribbon.png';
    }
    this.draw = ()=>{
        ctx.beginPath();
        ctx.fillStyle = this.colors[this.n];
        ctx.rect(this.x,this.y,w,h);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "#f00";
        ctx.rect(this.x+this.w/2-this.rw/2,this.y,this.rw,this.h);
        ctx.fill();
        
        ctx.drawImage(this.ribbon,this.x+this.w/2-this.rw/2-10,this.y-14,this.rw+20,30);
        ctx.closePath();
    }
}