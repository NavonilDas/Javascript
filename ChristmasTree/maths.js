
function getRandom(max,min){
    return (max-min)*Math.random() + min;
}

function toRadians(deg){
    return ((deg*Math.PI)/180);
}
function PolarCord(cx,cy,r,ang){
    return {
        x:cx+r*Math.cos(ang),
        y:cy+r*Math.sin(ang)
    };
}

function CalculateSineWave(amp,phase){
    var data = new Array(70);
    
    for(var i=phase;i<70;i++){
        data[i] = amp*Math.sin(i*0.09);
    }

    return data;
}