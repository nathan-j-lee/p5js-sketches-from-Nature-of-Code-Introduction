var s = function(p) {

  let tx = 0;
  let ty = 10000;
  let n = 100;
  p.setup = function() {
    p.createCanvas(600, 400);
    p.background(200);
    p.fill(150);
  };

  p.draw = function() {
    p.background(200);
    let x = p.map(p.noise(tx), 0, 1, 0, p.width);
    let y = p.map(p.noise(ty), 0, 1, 0, p.height);
    let z = p.map(p.noise(n), 0, 1, 10, 250);
    let color = p.map(p.noise(n), 0, 1, 0, 255);
    p.fill(color);
    p.ellipse(x, y, z, z);
    tx += 0.005;
    ty += 0.005;
    n += 0.005;
  };
};

var testSketch = new p5(s, 'c1');

var t = function(q) {

  let timeX = 20000;
  let timeY = 30000;
  q.setup = function() {

    q.createCanvas(600, 400);
    q.background(150);
    q.fill(255);

  };

  q.draw = function() {
    q.background(150);
    let r = q.random(-1, 1);
    let a = q.map(q.noise(timeX), 0, 1, 0, q.width);
    let b = q.map(q.noise(timeY), 0, 1, 0, q.height);

    q.ellipse(r+a, r+b, 40, 40);
    timeX += 0.005;
    timeY += 0.005;

  };
};

var testSketch2 = new p5(t, 'c2');


var a = function(r) {
let zoff = 1;
let xoff = 100;
let yoff = 100;
  r.setup = function() {
    r.createCanvas(600, 400);
    r.background(0);
  };

  r.draw = function() {
    r.loadPixels(); //load pixel data from display and put into array called pixels[] (must be called before reading or writing from pixels)
    for (let x = 0; x < r.width; x++) {
      yoff = 0;
      for (let y = 0; y < r.height; y++) {
        r.noiseDetail(2, 0.2);
        let c1 = r.map(r.noise(xoff, yoff, zoff), 0, 1, 0, 255);
        let index = (x + y * r.width) * 4;
        r.pixels[index] = c1;
        r.pixels[index+1] = c1;
        r.pixels[index+2] = c1;
        yoff += 0.001;
        
      }
      xoff += 0.001;
    }
    zoff += 0.001;
    r.updatePixels();
  };

};

var testSketch3 = new p5(a, 'c3');