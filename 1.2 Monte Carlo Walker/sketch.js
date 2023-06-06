//Use a custom probability distribution to vary the size of a step taken by the random walker. The step size can be determined by influencing the range of values picked. Can you map the probability exponentially—i.e. making the likelihood that a value is picked equal to the value squared?

let pos;
function setup() {
  createCanvas(1000, 1000);
  background(255);
  stroke(0);
  fill(150);
  pos = createVector(width/2, height/2);
}

function draw() {
  let r1 = random(-1, 1);
  let r2 = random(-1, 1);
  
  let stepsize = random(0, width) * monteCarlo();

  if(pos.x>width) pos.pos.x=0;
  if(pos.x<0)pos.x=width;
  if(pos.y>height) pos.y=0;
  if(pos.y<0)pos.y=height;
  r1 *= stepsize;
  stepsize = random(0, height) * monteCarlo();
  r2 *= stepsize;
  ellipse(pos.x+r1, pos.y+r2, 5, 5);
}

function monteCarlo() {
  // body...
  while (true) {
    let r1 = random();
    let probability = r1;
    let r2 = random();
    if (r2 < probability) return r1;
  }
}