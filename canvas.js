var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
console.log(canvas);

var gradient=c.createLinearGradient(0,0,canvas.width,0);
gradient.addColorStop("0","magenta");
gradient.addColorStop("0.5","blue");
gradient.addColorStop("1.0","red");

var w = canvas.width;
var h = canvas.height;

var planet = function(color, radius) 
{
    c.fillStyle = color;
    c.beginPath();
    c.arc(0, 0, radius, 0, 2 * Math.PI, true);
    c.closePath();
    c.fill();
}

var i = 5;
var drawFrame = function() 
{
    c.save();
    c.fillStyle = 'black';
    c.fillRect(0, 0, w, h);
    

    c.translate(w / 2, h / 2);
    planet('yellow', 30);
    c.font = "30px Verdana";
    c.fillStyle=gradient;
    c.fillText("The Sun is still",10,65); 
  

    c.rotate(Math.PI / 180 * i);
   
    
    c.translate(250, 0);
    planet('blue', 20);

    c.rotate(Math.PI / 180 * (i+2));
 




    c.translate(100, 0);
    planet('grey', 10);
    c.font = "30px Verdana";
    c.fillStyle=gradient;
    c.fillText("And we Spin!",10,90);


    c.restore();

    i++;
    
    
    window.requestAnimationFrame(drawFrame);

};

window.requestAnimationFrame(drawFrame);

