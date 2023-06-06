class Ball {

  constructor(x, y, xspeed, yspeed) {
    this.pos = createVector(x, y);
    this.vel = createVector(xspeed, yspeed);
  }
  update() {
    this.pos = this.pos.add(this.vel);
    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;    
  }
  show() {
    ellipse(this.pos.x, this.pos.y, 50, 50);

  }

}