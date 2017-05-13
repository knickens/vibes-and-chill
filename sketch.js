var mySound;
var r,g,b;




function preload(){
    mySound = loadSound('js/fruit.mp3');
}


function setup(){
    createCanvas(900,900);
    pg = createGraphics(450, 450);
    background(0);
    mySound.setVolume(0.1);
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
}

function draw(){
    fill(r,g,b);
ellipse(mouseX, mouseY, 60, 60);
pg.ellipse(mouseX-150, mouseY-75, 60, 60);
image(pg, 150, 75);
colors();
change();
}

function mouseClicked(){
  if(mySound.isPlaying()){
   mySound.pause();
   
   
  }
  else{
   mySound.play();
    
  
  }
}
//function mouseReleased(){
 //   mySound.pause();
//}


function colors(){
    if(mouseX <= random()){
      r = random(0,255);
      
    g = random(0,255);
    b = random(0,255);   
    }
}

function change(){
    if(mouseY <= random()){
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);       
    }
}