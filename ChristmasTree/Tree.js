function Trunk(x, y) {
    this.w = 60;
    this.h = 100;
    this.x = x;
    this.y = y;
    this.draw = () => {
        ctx.fillStyle = "#804000"; // Brown Colour
        ctx.beginPath();
        ctx.rect(this.x - this.w / 2, this.y, this.w, this.h);
        ctx.fill();
        ctx.closePath();
    }
}

/*
    sx,sy = starting cordinates
 */
function PartTree(sx, sy, len, dl) {
    this.sx = sx;
    this.sy = sy; 
    this.len = len; // Curve Length
    this.dl = dl; // Curve Depth
    this.e = {}; // Ending Point 1
    this.e2 = {}; // Ending Point 2
    this.cp1 = {}; // Control Point for Curve 1
    this.cp2 = {}; // Control Point For 2nd Curve
    this.cp3 = {}; // Control Point For 3rd Curve
    this.setup = function () {
        this.e = PolarCord(this.sx, this.sy, this.len, toRadians(60));
        var tmp = PolarCord((this.sx + this.e.x) / 2, (this.sy + this.e.y) / 2, this.dl, Math.PI / 2 + Math.PI / 3);

        this.cp1 = {
            x: (tmp.x * 2) - (this.sx + this.e.x) / 2,
            y: (tmp.y * 2) - (this.sy + this.e.y) / 2
        };

        this.e2 = PolarCord(this.sx, this.sy, this.len, 2 * Math.PI / 3);
        tmp = PolarCord((this.sx + this.e2.x) / 2, (this.sy + this.e2.y) / 2, this.dl, -Math.PI / 2 + 2 * Math.PI / 3);
        this.cp2 = {
            x: (tmp.x * 2) - (this.sx + this.e2.x) / 2,
            y: (tmp.y * 2) - (this.sy + this.e2.y) / 2
        };
        this.cp3 = {
            x: (this.e.x + this.e2.x) - (this.e.x + this.e2.x) / 2,
            y: (this.e.y + dl) * 2 - (this.e.y + this.e2.y) / 2
        };

    }
    this.draw = function () {
        ctx.fillStyle = "#1D8103";
        ctx.beginPath();
        ctx.moveTo(this.sx, this.sy);
        ctx.quadraticCurveTo(this.cp1.x, this.cp1.y, this.e.x, this.e.y);
        ctx.quadraticCurveTo(this.cp3.x, this.cp3.y, this.e2.x, this.e2.y);
        ctx.quadraticCurveTo(this.cp2.x, this.cp2.y, this.sx, this.sy);
        ctx.closePath();
        ctx.fill();
    }
}