var numballs = 40;
var x = new Array (numballs);
var y = new Array (numballs);
var speedX = new Array (numballs);
var speedY = new Array (numballs);
var limite;
var diameter= new Array (numballs);
let bg;
let noiseVal;
let a = 0.01;
let b = 0.02;
let c_off, d_off, e_off;


function setup() {
  bg=loadImage("nsky.jfif");//load an image as a background
  createCanvas (877, 500);
  frameRate(20);

  textFont("Avenir");

  fill (255, 150, 0);
  noStroke();

  for (var i = 0; i < numballs; i++) {
    x[i] = random(width);
    y[i] = random (height);
    speedX[i] = random (-5, 5);
    speedY[i] =  random (-5, 5);
    diameter [i]=random(5, 20);

  }
}
function draw () {
//image(img, 0, 0);


  background(bg);
  textSize(50);//text function
  if(frameCount % 3 == 0){
      text("The sky's the limit.", 160, 160);
    translate(200, 200);
    rotate(radians(frameCount));
    pop();
  }
  //text("The sky's the limit.", 160, 160);


  for (var i=0; i< numballs; i++) {
    x[i] += speedX[i];
   if (x[i]< 0 || x[i] > width) {
      speedX[i] *= -1;
    }
   y[i] += speedY[i];
   if (y[i] <0 ||y[i] > height) {
     speedY[i] *= -1;
  }

    limite += 10;
    if (limite > width){
      limite = 10;
    }

    fill(random(255), random(255), random(255));

    ellipse (x[i], y[i], diameter[i], diameter[i]);
    push();

  }
}
