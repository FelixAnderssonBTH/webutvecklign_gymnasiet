var x=100;
var y=100;
var yspeed=1;
var xspeed=10;
var g =2;


var canvas = document.getElementById("canvas"); // skapar koppling till canvas
  var ctx= canvas.getContext("2d"); // ritar 2d
  var W=window.innerWidth;
  var H=window.innerHeight;

//  console.log(H);
  canvas.width= W;
  canvas.height=H;




function draw(){
    update();
    console.log("nu körs draw")
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle="rgba(255,0,255,0.8"; // sätter vit färg på pennan
    ctx.beginPath(); // börjar rita
    ctx.moveTo(x,y);
    ctx.arc(x, y, 40, 0, 2 * Math.PI,true); // x,y ,r,startpunkt

    ctx.fill();
}
function update(){    //ansvarar för att flytta x och y och kolla om jag har träffat kant
    yspeed=yspeed+g;
    x=x+xspeed;
    y=y+yspeed;     //flyttar bollen från pos y till y+yspeed     (yspeed=1) flyttar 1px/uppdatering

    if (x+40>=W) {
      xspeed=-xspeed;
    }
    if (x-40<=0) {
      xspeed=-xspeed;
    }


    if(y+40>=H){      //när bollens origo i mitten av bollen +40 når botten


      y=y-10
      if(yspeed<11){

        yspeed=0;
        g=0;
      }
        yspeed=-yspeed;
    }
    if (y-40<=0) {
      yspeed=-yspeed;
    }


  }
setInterval(draw,20);
