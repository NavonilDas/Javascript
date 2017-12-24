var
    canvas, // Canavas Element
    ctx, // Canvas Context
    w, // Width
    h, // Height
    star, // Star object
    snowFlakes = [], // Snow Flawkes Object Array
    treeParts = [], // Tree Part Object Array
    bLights = [], // Big Light Object Array
    lighning = [],
    trunk, // Trunk Object 
    timer = 0, // Timer to Blink Lights
    tmp = 0,
    gifts = [], // Gifts Object Array
    _bulbs = [], // Blinking Light Object Array
    santa; // Santa Object

function Load() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext('2d');
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    canvas.style.backgroundColor = "#1AB3D2";
    //canvas.addEventListener('mousedown',addBulbs);
    Setup();
}

function Setup() {
    /* Creates Snow FLakes Object */
    for (var k = 0; k < 50; k++)
        snowFlakes.push(new SFlake());

    /* Add Green parts of the Tree to the tree object Array */
    treeParts.push(new PartTree(w / 2, 100, 100, 8));
    treeParts.push(new PartTree(w / 2, 125, 150, 10));
    treeParts.push(new PartTree(w / 2, 175, 200, 12));
    treeParts.push(new PartTree(w / 2, 225, 250, 14));
    treeParts.push(new PartTree(w / 2, 275, 300, 16));

    snowFlakes.forEach((val, i, ar) => {
        val.setup(); // Initialize Snow Flakes object
    });

    treeParts.forEach((val, i, ar) => {
        val.setup();

        /* Create and Initialize Big Lights */
        bLights[i] = new BigLight(val.e.x, val.e.y);
        bLights[i].setup();
        bLights[9 - i] = new BigLight(val.e2.x, val.e2.y);
        bLights[9 - i].setup();

        // Create and Initialize Lights on the Tree
        _bulbs[i] = new Lights(val, i);
        _bulbs[i].setup();
    });

    // Create and Initialize Star
    star = new Star(w / 2, 100, 30, 15, 30);
    star.setup();

    // Creates the Trunk for The tree
    trunk = new Trunk(treeParts[treeParts.length - 1].sx, treeParts[treeParts.length - 1].e2.y);
      
    // Creates and Initialize Gifts
    gifts[0] = new Gift(w/2-200,h-70,100,50,20,1);
    gifts[0].setup();
    gifts[1] = new Gift(w/2+150,h-90,120,70,20,2);
    gifts[1].setup();

    // Creates Santa Object
    santa = new Santa();
    santa.setup();

    DrawLoop();
}

function DrawLoop() {
    ctx.clearRect(0, 0, w, h); // Clear Canvas

    santa.draw(); // Draw Santa
    
    snowFlakes.forEach((val, i, ar) => {
        val.draw(); // Draw Snow FLakes
    });

    trunk.draw(); // Draw The Trunk

    treeParts.forEach((val, i, ar) => {
        val.draw(); // Draw the Parts of the Tree
    });

    bLights.forEach((val, i, ar) => {
        val.draw(); // Draw Big Lights
    });

    _bulbs.forEach((val, i, ar) => {
        val.draw(); // Draw Blinking Lights
    });

    star.draw(); // Draw Star

    // Blink the Lights
    if (timer > 15) {
        _bulbs.forEach((val, i, ar) => {
            val.changeColor();
        });
        timer = 0;
    }
    
    gifts.forEach((val,i,ar)=>{
        val.draw(); // Draw Gifts
    });
    
    timer++;

    window.requestAnimationFrame(DrawLoop);
}

/* Random ??? */

// var ii=0;
// function addBulbs(e){
//     e.preventDefault();
//     bulbs[ii] = new Bulbs(e.clientX,e.clientY);
//     bulbs[ii].setup();
//     ii++;
// }
// function DoWht(){
//     var p = document.getElementById('tmps');
//     var tmp = '';
//     bulbs.forEach((val,i,ar)=>{
//         tmp += '{x:'+val.x+',y:'+val.y+'},\n';
//     });
//     p.innerText = tmp;
// }
