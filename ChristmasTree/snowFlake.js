function SFlake(){
    this.x = 0;
    this.y = 0;
    this.c;
    this.speed = 1;
    this.size=20;
    this.opacity = 0;
    this.setup = function(){
        this.size = getRandom(60,20);
        this.opacity = getRandom(1,0.2);
        this.c = String.fromCharCode(Math.floor(getRandom(90,65)));
        this.x = Math.floor(getRandom(w,0));
        this.y = Math.floor(getRandom(h-this.size,-800));
    }
    this.draw = function(){
        ctx.font = this.size+"px ICE";
        ctx.fillStyle = "rgba(255,255,255,"+this.opacity+")";
        ctx.fillText(this.c,this.x,this.y);
        this.y += this.speed;
        if(this.y > h+this.size) {
            this.y = Math.floor(getRandom(-800,0));
        }
    }
}