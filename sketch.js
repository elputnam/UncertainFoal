var tileCount;
var locx;
var locy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  tileCount = height*0.07
  colorMode(HSB, 360, 100, 100, 100);
  locx = width/2;
  locy = height/2;
  frameRate(16);
  background(0);
}

function draw() {
  background(0);
  // if (frameCount%2==0){
  grid();
  // }
  fill(180, 100, random(100), 5);
  // stroke(180, 100, 10);
  noStroke();
  for (let i = 0; i < 50; i++){
  // ellipse(mouseX, mouseY, random(10)*i);
     ellipse(width/2, height/2, random(10)*i);

  }
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
         fill(random(10), 100, 100, random(100));
      // } if (toggle == 3){
      // fill(random(360), 100, random(10));


    } else {
      fill(random(10), 100, 100, random(10));
      }
    
      }
    }
}
// }