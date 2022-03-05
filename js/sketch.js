var tileCount;
var locx;
var locy;
let a = 0;

//CCapture
// var capture = false; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({
  format:'gif', 
  workersPath: 'js/',
  framerate: 16
});

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100, 100);
  tileCount = height*0.07
  colorMode(HSB, 360, 100, 100, 100);
  locx = width/2;
  locy = height/2;
  frameRate(16);
  background(0);
}

function draw() {
  if (frameCount==1) capturer.start(); // start the animation capture
  background(0);
  // if (frameCount%2==0){
  grid();
  // }
  // let coin = floor(random(2));
  // if (coin == 1){
  //   fill(50, 100, random(100), random(a));
  // } else {
  // fill(200, 100, random(100), random(a));
  // }
  // // stroke(180, 100, 10);
  // noStroke();
  // for (let i = 0; i < 50; i++){
  // // ellipse(mouseX, mouseY, random(10)*i);
  //    ellipse(width/2, height/2, 10*i);

  // }
  // a += 0.1;
  // if (a > 100){
  //   a = 0;
  // }
  capturer.capture(document.getElementById('defaultCanvas0'));  
  if (frameCount==360){
    save_record();
  }
  print(frameCount);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function grid(){
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      let posX = (width / tileCount) * gridX;
      let posY = (height / tileCount) * gridY;
      noStroke();
      let nudge = (-3, 3);
        // tiles
        // quad(
        //     posX + random(nudge),
        //     posY + random(nudge),
        //     posX + width / tileCount + random(nudge),
        //     posY + random(nudge),
        //     posX + width / tileCount + random(nudge),
        //     posY + height / tileCount + random(nudge),
        //     posX + random(nudge),
        //     posY + height / tileCount + random(nudge)
        //   );

      ellipse(posX, posY, width/tileCount, height/tileCount);
      
      var toggle = floor(random(1, 150));
      if (toggle == 1){
         fill(50, 100, 100, random(100));
      // } if (toggle == 3){
      // fill(random(360), 100, random(10));


    } else {
      fill(200, 100, 100, random(30));
      }
    
      }
    }
}

function save_record() {
  capturer.save();
}
// }