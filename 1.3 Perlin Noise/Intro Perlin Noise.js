var s = function(p) {

  let tx = 0;
  let ty = 10000;
  let n = 100;
  p.setup = function() {
    p.createCanvas(600, 400);
    p.background(200);
    p.fill(150);
    //hello
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

  r.setup = function() {
    r.createCanvas(800, 300);
    r.background(200);
    loadPixels() //load pixel data from display and put into array called pixels[] (must be called before reading or writing from pixels)
    for (int x = 0; x < r.width; x++) {
      for (int y = 0; y < r.height; y++) {
        let brightness = r.random(255); //choose a random color from black to white
        pixels[x+y*width] = r.color(brightness);
      }
    }
    r.updatePixels();
  };
  r.draw = function() {

  };

};

var testSketch3 = new p5(t, 'c3');