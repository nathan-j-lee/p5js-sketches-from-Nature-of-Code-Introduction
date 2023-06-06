let vel;
let ball;
function setup() {
  createCanvas(600, 500);
  background(100);
  ball = new Ball(width/2, height/2);
  
}
function draw() {
  ball.update();
  ball.show();
  // translate(width/2, height/2);
  // vel = createVector(random(-200, 200), random(-200, 200));
  // vel = p5.Vector.random2D();
  // vel.mult(50);
  // stroke(255, 50);
  // strokeWeight(4);
  // line(0, 0, vel.x, vel.y);
}

