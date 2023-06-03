var a = function(r) {
  let x;
  let y;
  let xspeed = 5;
  let yspeed = 5;
  r.setup = function() {
    r.createCanvas(600, 500);
    r.background(100);
    x = r.width/2;
    y = r.height/2;
  };
  r.draw = function() {
    r.background(100);
    x += xspeed;
    y += yspeed;
    r.ellipse(x, y, 50, 50);
    if (x < 0) xspeed = 5;
    if (x > r.width) xspeed = -5;
    if (y < 0) yspeed = 5;
    if (y > r.height) yspeed = -5;
  };
};

var sketch1 = new p5(a, 'c1');