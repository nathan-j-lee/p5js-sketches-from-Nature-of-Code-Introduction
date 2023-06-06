let ball;
function setup() {
  createCanvas(600, 500);
  background(100);
  ball = new Ball(width/2, height/2, 5, 5);
}
function draw() {
  background(100);
  ball.update();
  ball.show();

}

