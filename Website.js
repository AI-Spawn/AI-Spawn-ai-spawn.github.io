var x;
var y;
var speed = 5;
let headerFont;
let bodyFont;
var githubIcon;
var youtubeIcon;
var midX;
var edHeight = 751;
var edMidX = 1536/2;
var edWidth = 1536;
var bottomBar = 0;
let anchors = [0];
var section;


var firstRun = true;
function setup() {
  preLoad();
  createCanvas(windowWidth, max(anchors[anchors.length - 1] + scaleNSY(0), windowHeight));
  rectMode(CENTER); // Set rectMode to CENTER
  textAlign(CENTER);
  noStroke();
  x = width/2;
  y = edHeight/2;
  textFont(headerFont);
  midX = windowWidth/2;
  edHeight = scaleX(751);
}

function draw() {
  background(153);
  fill(150, 0, 0);

  rect(x, y, 25, 25);
  if (mouseX > x) {
    x += speed;
  //  constrain(x, 0, width);
  }
  if (mouseX < x) {
    x -= speed;
//    constrain(x, 0, width);
  }
  if (mouseY > y) {
    y += speed;
  //  constrain(y, 0, scaleY(edHeight));
  }
  if (mouseY < y) {
    y -= speed;
  //  constrain(y, 0, scaleY(edHeight));
  }

  displayProjects();

 if (firstRun) {
    firstRun = false;
    //createDiv('<footer class="w3-container w3-padding-64 w3-center w3-xlarge"  ><a href="https://github.com/AI-Spawn" class="fa fa-github w3-hover-opacity"></a><a href="https://twitter.com/AISpawn" class="fa fa-twitter w3-hover-opacity"></a><a href="https://www.youtube.com/channel/UC6NT7CHGhDfkamfMZswuXVQ" class="fa fa-youtube w3-hover-opacity"></a></footer>');

    resizeCanvas(windowWidth, max(anchors[anchors.length - 1] + scaleNSY(0), windowHeight));
  }
  fill(255);
}
