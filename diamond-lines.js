function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (var i = 10; i <= 200; i = i+10) {
    
    line(200-i,i, 200+i, i);
  }
  for (var i = 10; i <= 200; i = i+10) {
    line(200-i,400-i,200+i,400-i)
  }
}
