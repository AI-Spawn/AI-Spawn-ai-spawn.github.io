var github;
function setup() {
  createCanvas(screen.width, 300);
  preLoad();
  imageMode(CENTER);
  noStroke();
}
function draw() {
  background(160);
  fill(255);
  ellipse(width/2, height/2, scaleX(104), scaleX(104));
  image(github, width/2, height/2, scaleX(100), scaleX(100));
}
function scaleX(x) {
  x = x/1536*width;
  return x;
}
function scaleY(h) {
  h = h/860*height;
  return h;
}
function checkButton() {
  if (dist(mouseX, mouseY, width/2, height/2) < scaleX(50)) {
    window.location.href = "https://github.com/AI-Spawn/Thumbfail";
  }
}


function mousePressed() {
  checkButton();
}
function touchStarted() {
  checkButton();
}
