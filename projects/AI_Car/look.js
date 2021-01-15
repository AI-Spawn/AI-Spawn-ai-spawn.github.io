var xwOff;
var xhOff;
var ywOff;
var yhOff;

var slope;
var heightCounter;
var leftDist;
var rightDist;
var frontDist;
var frontLeftDist;
var frontRightDist;

var frameCounter = 0;
var showSight = false;

// var frameLag = 50;
var frameLag = 50;
var leftHolder = [];
var rightHolder = [];



function look() {
  //
  //
  //
  //       //Front Left and Back Right:
  let x = int((carX));
  let y = int((carY));
  let d = pixelDensity();
  trackImage.loadPixels();

  xwOff = carW / 2 * cos(radians(degrees));
  xhOff = carH / 2 * sin(radians(degrees));
  ywOff = carW / 2 * sin(radians(degrees));
  yhOff = carH / 2 * cos(radians(degrees));
  let off = (y * width + x) * d * 4;
  let loc = [
    trackImage.pixels[off],
    trackImage.pixels[off + 1],
    trackImage.pixels[off + 2],
    trackImage.pixels[off + 3]
  ];


  // text(accuracy, width / 2, height / 2);
  // text(trackImage.pixels[off], width / 2, height / 2 + 50);
  // text(trackImage.pixels[0], width / 2, height / 2 + 100);
  if (loc[0] == trackImage.pixels[0] && loc[1] == trackImage.pixels[1] && loc[2] == trackImage.pixels[2]) {
    dead = true;
  }






  if (!humanPlaying || showSight) {



    //front rigtt

    if (degrees < 153 || degrees > 333) {
      slope = (y - (y - ywOff + yhOff)) / (x - (x - xwOff - xhOff));

      heightCounter = 0;
      while (loc[0] != trackImage.pixels[0] && heightCounter < width * 5) {
        // while (getPixel(int(x - heightCounter / 5), int(y - slope * heightCounter / 5)) != getPixel(0, 0)) {
        //
        heightCounter += accuracy;;
        x = int(carX + heightCounter / 5);
        y = int(carY + slope * heightCounter / 5);
        d = pixelDensity();
        offTrackCounter = 0;
        trackImage.loadPixels();

        off = (y * width + x) * d * 4;
        loc = [
          trackImage.pixels[off],
          trackImage.pixels[off + 1],
          trackImage.pixels[off + 2],
          trackImage.pixels[off + 3]
        ];
        //
      }

      if (showSight) {

        fill(255, 0, 0);
        circle(x, y, 25);
        stroke(0);
        line(x, y, carX, carY);
      }
      frontRightDist = dist(x, y, carX, carY);
    } else {
      slope = (y - (y - ywOff + yhOff)) / (x - (x - xwOff - xhOff));

      heightCounter = 0;
      while (loc[0] != trackImage.pixels[0] && heightCounter < width * 5) {
        // while (getPixel(int(x - heightCounter / 5), int(y - slope * heightCounter / 5)) != getPixel(0, 0)) {
        //
        heightCounter += accuracy;;
        x = int(carX - heightCounter / 5);
        y = int(carY - slope * heightCounter / 5);
        d = pixelDensity();
        offTrackCounter = 0;
        trackImage.loadPixels();

        off = (y * width + x) * d * 4;
        loc = [
          trackImage.pixels[off],
          trackImage.pixels[off + 1],
          trackImage.pixels[off + 2],
          trackImage.pixels[off + 3]
        ];
        //
      }

      if (showSight) {

        fill(255, 0, 0);
        circle(x, y, 25);
        stroke(0);
        line(x, y, carX, carY);
      }
      frontRightDist = dist(x, y, carX, carY);
    }


    if (degrees < 210 && degrees > 30) {
      slope = (y - (y - ywOff - yhOff)) / (x - (x - xwOff + xhOff));

      heightCounter = 0;
      x = int(carX + heightCounter / 5);
      y = int(carY + slope * heightCounter / 5);
      d = pixelDensity();
      offTrackCounter = 0;
      trackImage.loadPixels();

      off = (y * width + x) * d * 4;
      loc = [
        trackImage.pixels[off],
        trackImage.pixels[off + 1],
        trackImage.pixels[off + 2],
        trackImage.pixels[off + 3]
      ];

      while (loc[0] != trackImage.pixels[0] && heightCounter < width * 5) {
        // while (getPixel(int(x - heightCounter / 5), int(y - slope * heightCounter / 5)) != getPixel(0, 0)) {
        //
        heightCounter += accuracy;;
        x = int(carX + heightCounter / 5);
        y = int(carY + slope * heightCounter / 5);
        d = pixelDensity();
        offTrackCounter = 0;
        trackImage.loadPixels();

        off = (y * width + x) * d * 4;
        loc = [
          trackImage.pixels[off],
          trackImage.pixels[off + 1],
          trackImage.pixels[off + 2],
          trackImage.pixels[off + 3]
        ];
        //
      }


      if (showSight) {

        fill(0, 255, 0);
        circle(x, y, 25);
        stroke(0);
        line(x, y, carX, carY);
      }
      frontLeftDist = dist(x, y, carX, carY);
    } else {
      slope = (y - (y - ywOff - yhOff)) / (x - (x - xwOff + xhOff));

      heightCounter = 0;
      x = int(carX + heightCounter / 5);
      y = int(carY + slope * heightCounter / 5);
      d = pixelDensity();
      offTrackCounter = 0;
      trackImage.loadPixels();

      off = (y * width + x) * d * 4;
      loc = [
        trackImage.pixels[off],
        trackImage.pixels[off + 1],
        trackImage.pixels[off + 2],
        trackImage.pixels[off + 3]
      ];
      while (loc[0] != trackImage.pixels[0] && heightCounter < width * 5) {
        // while (getPixel(int(x - heightCounter / 5), int(y - slope * heightCounter / 5)) != getPixel(0, 0)) {
        //
        heightCounter += accuracy;;
        x = int(carX - heightCounter / 5);
        y = int(carY - slope * heightCounter / 5);
        d = pixelDensity();
        offTrackCounter = 0;
        trackImage.loadPixels();

        off = (y * width + x) * d * 4;
        loc = [
          trackImage.pixels[off],
          trackImage.pixels[off + 1],
          trackImage.pixels[off + 2],
          trackImage.pixels[off + 3]
        ];
        //
      }


      if (showSight) {

        fill(0, 255, 0);
        circle(x, y, 25);
        stroke(0);
        line(x, y, carX, carY);
      }
      frontLeftDist = dist(x, y, carX, carY);
    }


    if (0 < degrees && degrees < 180) {
      slope = (y - (y - yhOff)) / (x - (x + xhOff));

      heightCounter = 0;
      x = int(carX + heightCounter / 5);
      y = int(carY + slope * heightCounter / 5);
      d = pixelDensity();
      offTrackCounter = 0;
      trackImage.loadPixels();

      off = (y * width + x) * d * 4;
      loc = [
        trackImage.pixels[off],
        trackImage.pixels[off + 1],
        trackImage.pixels[off + 2],
        trackImage.pixels[off + 3]
      ];

      while (loc[0] != trackImage.pixels[0] && heightCounter < width * 5) {
        // while (getPixel(int(x - heightCounter / 5), int(y - slope * heightCounter / 5)) != getPixel(0, 0)) {
        //
        heightCounter += accuracy;;
        x = int(carX + heightCounter / 5);
        y = int(carY + slope * heightCounter / 5);
        d = pixelDensity();
        offTrackCounter = 0;
        trackImage.loadPixels();

        off = (y * width + x) * d * 4;
        loc = [
          trackImage.pixels[off],
          trackImage.pixels[off + 1],
          trackImage.pixels[off + 2],
          trackImage.pixels[off + 3]
        ];
        //
      }


      if (showSight) {

        fill(0, 0, 255);
        circle(x, y, 25);
        stroke(0);
        line(x, y, carX, carY);
      }
      frontDist = dist(x, y, carX, carY);
    } else {
      slope = (y - (y - yhOff)) / (x - (x + xhOff));
      heightCounter = 0;
      x = int(carX + heightCounter / 5);
      y = int(carY + slope * heightCounter / 5);
      d = pixelDensity();
      offTrackCounter = 0;
      trackImage.loadPixels();

      off = (y * width + x) * d * 4;
      loc = [
        trackImage.pixels[off],
        trackImage.pixels[off + 1],
        trackImage.pixels[off + 2],
        trackImage.pixels[off + 3]
      ];
      while (loc[0] != trackImage.pixels[0] && heightCounter < width * 5) {
        // while (getPixel(int(x - heightCounter / 5), int(y - slope * heightCounter / 5)) != getPixel(0, 0)) {
        //
        heightCounter += accuracy;;
        x = int(carX - heightCounter / 5);
        y = int(carY - slope * heightCounter / 5);
        d = pixelDensity();
        offTrackCounter = 0;
        trackImage.loadPixels();

        off = (y * width + x) * d * 4;
        loc = [
          trackImage.pixels[off],
          trackImage.pixels[off + 1],
          trackImage.pixels[off + 2],
          trackImage.pixels[off + 3]
        ];
        //
      }


      if (showSight) {

        fill(0, 0, 255);
        circle(x, y, 25);
        stroke(0);
        line(x, y, carX, carY);
      }
      frontDist = dist(x, y, carX, carY);
    }


    fill(255, 255, 0);

    if (90 < degrees && degrees < 270) {
      // if(true){
      slope = (y - (y - ywOff)) / (x - (x - xwOff));

      heightCounter = 0;
      x = int(carX + heightCounter / 5);
      y = int(carY + slope * heightCounter / 5);
      d = pixelDensity();
      offTrackCounter = 0;
      trackImage.loadPixels();

      off = (y * width + x) * d * 4;
      loc = [
        trackImage.pixels[off],
        trackImage.pixels[off + 1],
        trackImage.pixels[off + 2],
        trackImage.pixels[off + 3]
      ];

      while (loc[0] != trackImage.pixels[0] && heightCounter < width * 5) {
        // while (getPixel(int(x - heightCounter / 5), int(y - slope * heightCounter / 5)) != getPixel(0, 0)) {
        //
        heightCounter += accuracy;;
        x = int(carX + heightCounter / 5);
        y = int(carY + slope * heightCounter / 5);
        d = pixelDensity();
        offTrackCounter = 0;
        trackImage.loadPixels();

        off = (y * width + x) * d * 4;
        loc = [
          trackImage.pixels[off],
          trackImage.pixels[off + 1],
          trackImage.pixels[off + 2],
          trackImage.pixels[off + 3]
        ];
        //
      }


      if (showSight) {

        circle(x, y, 25);
        stroke(0);
        line(x, y, carX, carY);
      }
      leftDist = dist(x, y, carX, carY);
    } else {
      slope = (y - (y - ywOff)) / (x - (x - xwOff));

      heightCounter = 0;
      x = int(carX + heightCounter / 5);
      y = int(carY + slope * heightCounter / 5);
      d = pixelDensity();
      offTrackCounter = 0;
      trackImage.loadPixels();

      off = (y * width + x) * d * 4;
      loc = [
        trackImage.pixels[off],
        trackImage.pixels[off + 1],
        trackImage.pixels[off + 2],
        trackImage.pixels[off + 3]
      ];
      while (loc[0] != trackImage.pixels[0] && heightCounter < width * 5) {
        // while (getPixel(int(x - heightCounter / 5), int(y - slope * heightCounter / 5)) != getPixel(0, 0)) {
        //
        heightCounter += accuracy;;
        x = int(carX - heightCounter / 5);
        y = int(carY - slope * heightCounter / 5);
        d = pixelDensity();
        offTrackCounter = 0;
        trackImage.loadPixels();

        off = (y * width + x) * d * 4;
        loc = [
          trackImage.pixels[off],
          trackImage.pixels[off + 1],
          trackImage.pixels[off + 2],
          trackImage.pixels[off + 3]
        ];
        //
      }


      if (showSight) {

        circle(x, y, 25);
        stroke(0);
        line(x, y, carX, carY);
      }
      leftDist = dist(x, y, carX, carY);
    }
    fill(0, 255, 255);

    if (90 < degrees && degrees < 270) {
      // if(true){
      slope = (y - (y + ywOff)) / (x - (x + xwOff));

      heightCounter = 0;
      x = int(carX - heightCounter / 5);
      y = int(carY + slope * heightCounter / 5);
      d = pixelDensity();
      offTrackCounter = 0;
      trackImage.loadPixels();

      off = (y * width + x) * d * 4;
      loc = [
        trackImage.pixels[off],
        trackImage.pixels[off + 1],
        trackImage.pixels[off + 2],
        trackImage.pixels[off + 3]
      ];

      while (loc[0] != trackImage.pixels[0] && heightCounter < width * 5) {
        // while (getPixel(int(x - heightCounter / 5), int(y - slope * heightCounter / 5)) != getPixel(0, 0)) {
        //
        heightCounter += accuracy;;
        x = int(carX - heightCounter / 5);
        y = int(carY - slope * heightCounter / 5);
        d = pixelDensity();
        offTrackCounter = 0;
        trackImage.loadPixels();

        off = (y * width + x) * d * 4;
        loc = [
          trackImage.pixels[off],
          trackImage.pixels[off + 1],
          trackImage.pixels[off + 2],
          trackImage.pixels[off + 3]
        ];
        //
      }


      if (showSight) {

        circle(x, y, 25);
        stroke(0);
        line(x, y, carX, carY);
      }
      rightDist = dist(x, y, carX, carY);
    } else {
      slope = (y - (y - ywOff)) / (x - (x - xwOff));

      heightCounter = 0;
      x = int(carX + heightCounter / 5);
      y = int(carY + slope * heightCounter / 5);
      d = pixelDensity();
      offTrackCounter = 0;
      trackImage.loadPixels();

      off = (y * width + x) * d * 4;
      loc = [
        trackImage.pixels[off],
        trackImage.pixels[off + 1],
        trackImage.pixels[off + 2],
        trackImage.pixels[off + 3]
      ];

      while (loc[0] != trackImage.pixels[0] && heightCounter < width * 5) {
        // while (getPixel(int(x - heightCounter / 5), int(y - slope * heightCounter / 5)) != getPixel(0, 0)) {
        //
        heightCounter += accuracy;;
        x = int(carX + heightCounter / 5);
        y = int(carY + slope * heightCounter / 5);
        d = pixelDensity();
        offTrackCounter = 0;
        trackImage.loadPixels();

        off = (y * width + x) * d * 4;
        loc = [
          trackImage.pixels[off],
          trackImage.pixels[off + 1],
          trackImage.pixels[off + 2],
          trackImage.pixels[off + 3]
        ];
        //
      }


      if (showSight) {

        circle(x, y, 25);
        stroke(0);
        line(x, y, carX, carY);
      }
      rightDist = dist(x, y, carX, carY);
    }



    fill(255)

  }
}

function getPixel(px, py) {
  px = int(px)
  py = int(py)
  fd = pixelDensity();
  trackImage.loadPixels();

  let offFun = (py * width + px) * fd * 4;
  let locFun = [
    trackImage.pixels[offFun],
    trackImage.pixels[offFun + 1],
    trackImage.pixels[offFun + 2],
    trackImage.pixels[offFun + 3]
  ];
  return locFun;
}
