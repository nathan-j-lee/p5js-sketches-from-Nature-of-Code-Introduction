class Ball {

  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel;
  }
  update() {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(10));
    this.pos.add(this.vel);
    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;    
  }
  show() {
    stroke(100, 50);
    ellipse(this.pos.x, this.pos.y, 50, 50);

  }

}