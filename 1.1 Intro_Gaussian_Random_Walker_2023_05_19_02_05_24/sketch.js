//A Gaussian random walk is defined as one in which the step size (how far the object moves in a given direction) is generated with a normal distribution. Implement this variation of our random walk.
let x;
let y;
function setup() {
  createCanvas(400, 200);
  background(100);
  stroke(0);
  x = width/2;
  y = height/2;
}

function draw() {
  //randomGaussian
  let rg = randomGaussian(5, 1);
  let r1 = random(-1, 1);
  let r2 = random(-1, 1);
  
  x=x+(r1*rg);
  y=y+(r2*rg);
  fill(rg*10);
  if(x>width) x=0;
  if(x<0)x=width;
  if(y>height) y=0;
  if(y<0)y=height;
  ellipse(x, y, 5, 5);
}