/*
    cx = center X
    cy = center Y
    br = big Radius
    sr = small Radius
    da = Difference angle btw br and sr
 */
function Star(cx,cy,br,sr,da){
    this.cx = cx;
    this.cy = cy;
    this.br = br;
    this.sr = sr;
    this.diff = 360/5; // Difference in angle
    this.da = da;
    this.allPoints = [];
    this.setup = function(){
        this.bpoints = []; // big points
        this.spoints = [];
        var l=0,m=0,tmp;
        for(var k=-this.da/2;k<=360;k+=this.diff){
            tmp = PolarCord(this.cx,this.cy,this.br,toRadians(k));
            this.bpoints.push(tmp);
            tmp = PolarCord(this.cx,this.cy,this.sr,toRadians(k+da));
            this.spoints.push(tmp);
        }
        for(var k=1;k<=10;k++){
            if(k%2 == 0){
                this.allPoints.push(this.spoints[l]); l++;
            }else{
                this.allPoints.push(this.bpoints[m]); m++;
            }
        }
    }
    this.draw = function(){
        ctx.fillStyle = "#FDDD00";
        ctx.strokeStyle = "#000";
        ctx.beginPath();
        ctx.moveTo(this.allPoints[0].x,this.allPoints[0].y);
        for(var k=1;k<this.allPoints.length;k++){
            ctx.lineTo(this.allPoints[k].x,this.allPoints[k].y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}