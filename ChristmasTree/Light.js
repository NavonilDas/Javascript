/* 
    Big Light
    x,y -> Position 
*/
function BigLight(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10; // radius of The Bulb
    /// Colors of The Bulb
    this.color = ['#f00', '#00f', '#FF80FF', '#8000FF', '#00FF40', '#FF8000'];
    this.selected = ''; // Selected Colour
    this.setup = () => {
        this.selected = this.color[Math.floor(this.color.length * Math.random())];
    }
    this.draw = () => {
        ctx.fillStyle = this.selected;
        ctx.strokeStyle = "#000";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}

/*
    Blinking Bulbs
    x,y ->Position
 */
function Bulbs(x, y) {
    this.x = x;
    this.y = y;
    // Colours
    this.color = ['#f00', '#0f0', '#00f', '#FF8000', '#FFFF00', '#8C8C46', '#FD44B8', '#8000FF'];
    this.selected = ''; // Selected Colour
    this.r = 4; // radius
    this.setup = () => {
        this.selected = this.color[Math.floor(this.color.length * Math.random())];
    }
    this.changeColor = () => {
        this.selected = this.color[Math.floor(this.color.length * Math.random())];
    }
    this.draw = () => {
        ctx.fillStyle = this.selected;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}

/*
    Blinking Lights for each Part of the tree

 */
function Lights(treepart, index) {
    this.ind = index;
    this.treepart = treepart;
    this.bulbs = []; // Blinking bulb objects
    this.rows = 0;
    this.cols = 0;
    this.sy = 0;
    this.sx = 0;
    this.setup = () => {
        // Draw Bulbs in a triangular Form 
        var j = 0, tmp, end;
        this.sx = treepart.sx;
        this.sy = treepart.e.y - 10;
        this.spacing = 5 * this.ind;
        this.cols = Math.round(Math.abs(this.treepart.e2.x - this.treepart.e.x) / 25);
        this.row = Math.abs(this.treepart.e.y - this.treepart.sy) / 25;
        this.row = Math.round(this.row);
        var n = Math.min(this.row, this.cols);
        end = (this.ind > 0) ? (this.ind + 1) : 1;
        for (var r = n; r >= end; r--) {
            tmp = Math.floor(r / 2);
            if (tmp > 0) {
                for (j = 1; j <= tmp; j++) {
                    this.bulbs.push(new Bulbs(this.sx - (j * 20), this.sy));
                }
                this.bulbs.push(new Bulbs(this.sx, this.sy));
                for (j = 1; j <= tmp; j++) {
                    this.bulbs.push(new Bulbs(this.sx + (j * 20), this.sy));
                }
            } else {
                this.bulbs.push(new Bulbs(this.sx, this.sy));
            }
            this.sy -= 16;
        }

        this.bulbs.forEach((val, i, ar) => {
            val.setup();
        });

    }
    this.changeColor = () => {
        this.bulbs.forEach((val, i, ar) => {
            val.changeColor();
        });
    }
    this.draw = () => {
        this.bulbs.forEach((val, i, ar) => {
            val.draw();
        });
    }
}