let trackImage;
let arrow;
var screenX = 0;

var forward = true;
var left = true;
var right = true;
var startSpeed = 3;
let startTurnSpeed = 3;
let turnSpeed;
let speed;

var adjustTrack = false;
var adjustStep = 0;
var stepTitle = "";
var stepText = "";

var spawnX = 140;
var spawnY = 400;
var spawnDeg = 3.5;
var spawnW = 25;
var spawnH = 75 * spawnW / 40;


var carX = spawnX;
var carY = spawnY;
var carW = spawnW;
var carH = spawnH;
var degrees = spawnDeg;

var ableToProceed = true;

var dead = true;

var humanPlaying = true;

var showTrack = true;

var accuracy = 10;


function setup() {
  if (screen.width > 700) {
    // frameRate(1000);
    cnv = createCanvas(700, 700);
    createCanvas(700, 700);


    var screenX = (windowWidth - width) / 2;
    var screenY = (windowWidth / 2);
    cnv.position(screenX, screenY);
    angleMode(RADIANS);
    rectMode(CENTER);
    textAlign(CENTER);
    background(trackImage);

    trackImage.resize(width, height);

    trackImage.loadPixels();
    pixelDensity(1);
    // while((152 < degrees && degrees < 154) || (332 < degrees && degrees < 334) ||(209 < degrees && degrees < 211) ||(29 < degrees && degrees < 31) || ((0 < degrees && degrees < 1) || (559 < degrees)) || (179 < degrees && degrees < 181) ||(89 < degrees && degrees < 91) ||(269 < degrees && degrees < 721)){
    //   degrees += 0.5;
    // }
    look();
    for (let i = 0; i < frameLag; i++) {
      leftHolder[i] = leftDist;
      rightHolder[i] = rightDist;
    }
  } else {
    createCanvas(1, 1);
  }
}

function draw() {

  // resizeCanvas(windowWidth/1.5, windowWidth/1.5);

  // scale(sqrt(width/700));
  if (screen.width > 0) {
    degrees %= 360;
    while (degrees < 0) {
      degrees += 360;
    }

    if (!adjustTrack) {
      speed = (startSpeed);
      turnSpeed = (startTurnSpeed);
      keyInputs();
      imageMode(CORNER);
      if (showTrack) {
        background(trackImage);
      } else {
        background(70);
      }
      imageMode(CENTER);

      push();
      translate((carX), (carY));

      rotate(radians(degrees));
      rect(0, 0, (carW), (carH));
      pop();

      move();

      think();
      if (dead) {

        respawn();
      }
    } else {
      imageMode(CORNER);
      background(trackImage);
      imageMode(CENTER);
      fill(255);
      rect(width / 2, height / 9, width, 2 * height / 9);
      fill(0);
      textSize(width / 20);
      text(stepTitle, width / 2, height / 11);
      textSize(width / 30);

      text(stepText, width / 2, height / 7);

      if (adjustStep == 0) {
        stepTitle = "Scale";
        stepText = "Choose the size of the car, click mouse when done";
        fill(255);
        spawnW = mouseX / 10;
        spawnH = 75 * spawnW / 40;
        fill(0);
        spawnX = width / 2;
        spawnY = height / 2;
        carX = spawnX;
        carY = spawnY;
        carW = spawnW;
        carH = spawnH;
        degrees = 0.1;
        spawnDeg = 0.1;
        if (mouseIsPressed && ableToProceed) {
          adjustStep++;
          ableToProceed = false;

        } else if (!mouseIsPressed && !ableToProceed) {
          ableToProceed = true;
        }
      } else if (adjustStep == 1) {
        stepTitle = "Position";
        stepText = "Move mouse to start position, click when done"
        spawnX = mouseX;
        spawnY = mouseY;
        carX = spawnX;
        carY = spawnY;


        if (mouseIsPressed && ableToProceed) {
          adjustStep++;
          ableToProceed = false;

        } else if (!mouseIsPressed && !ableToProceed) {
          ableToProceed = true;
        }
      } else if (adjustStep == 2) {
        stepTitle = "Rotation";
        stepText = "Move mouse to adjust rotation, click when done"
        degrees = int(mouseX) + 0.1;
        // while((152 < degrees && degrees < 154) || (332 < degrees && degrees < 334) ||(209 < degrees && degrees < 211) ||(29 < degrees && degrees < 31) || ((0 < degrees && degrees < 1) || (559 < degrees)) || (179 < degrees && degrees < 181) ||(89 < degrees && degrees < 91) ||(269 < degrees && degrees < 721)){
        //   degrees += 0.5;
        // }
        spawnDeg = degrees;


        if (mouseIsPressed && ableToProceed) {
          adjustStep++;
          ableToProceed = false;

        } else if (!mouseIsPressed && !ableToProceed) {
          ableToProceed = true;
        }
      } else if (adjustStep == 3) {
        adjustTrack = false;
      }



      push();
      translate((carX), (carY));

      rotate(radians(degrees));
      rect(0, 0, (carW), (carH));
      if (adjustStep == 2) {
        image(arrow, 0, 0, (carW), (carH));
      }
      pop();
    }
  }
}

function preload() {
  trackImage = loadImage("track.png");
  arrow = loadImage("arrow.png");
}
