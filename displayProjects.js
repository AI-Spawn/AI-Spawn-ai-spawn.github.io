let favs = [4, 3, 2, 0, 1];
let featured = 4;
var numPerRow = 4;
var thumbWidth = 192;
var thumbHeight = 108;

let projectTitles = ["AI Writes Harry Potter", "Thumbfail", "Alien Pictures", "Brainfuck - UL 1", "I Built an AI Robot"];
let projectThumbnails = ["harrypotter.jpg", "thumbfail.jpg", "a51.jpg", "brainfuck.jpg", "aicar.png"];
let projectLink = ["AI_Writes_Harry_Potter", "Thumbfail", "AI_Makes_Aliens", "Brainfuck", "AI_Car"];
let projectDescription = ["", "Have an AI tell you how good or bad your thumbnail is.", "", "Learn about brainfuck, the best language you'll never use.", "I used NEAT to train virtual cars to drive around a track, then used the trained model to drive a real (robot) car around a real (cardboard) track."]
var rowCounter = 0;
var cCounter = 0;

var rowGap = 300;


function featuredProject(){
section = 0;
textSizeS(70);
textFont(headerFont);
fill(255);
textS("Featured", edMidX, 70);

// fill(255, 255, 50);
fill(0);
rectS(edMidX, 270, 192 * 3 + 5, 108 * 3 + 5);
imageS(featured + 2, edMidX, 270, 192*3, 108*3);
fill(255);
textFont(bodyFont);
textSizeS(40);
textS(projectTitles[featured],edMidX, 500);
textSizeS(20);
textS(projectDescription[featured],edMidX, 550);


anchors[section+1] = 700;
}




















function displayProjects() {
  featuredProject();
  section = 1;



  imageMode(CENTER);
  if (windowWidth < edWidth/3) {
    rowGap = 400;
  } else {
    rowGap = 300;
  }
  rowGap = easeInOut(windowWidth);
  textSizeS(50);
  textFont(headerFont);
  fill(255);
  textS("Top Projects", edMidX, 70);
  textFont(bodyFont);
  cCounter = 0;
  rowCounter = 0;
  for (var i = 0; i < favs.length; i++) {
    cCounter = i % numPerRow;
    if (cCounter == 0) {
      rowCounter++;
    }
    fill(0);

    rectS(edWidth/(numPerRow+2) * (cCounter + 1.5), (rowGap * (rowCounter - 1) + 200), thumbWidth + 4, thumbHeight + 4);
    imageS(favs[i] + 2, edWidth/(numPerRow+2) * (cCounter + 1.5), (rowGap * (rowCounter - 1) + 200), thumbWidth, thumbHeight);
    fill(255);
    textFont(bodyFont);
    textSizeS(20);
    textS(projectTitles[favs[i]], edWidth/(numPerRow+2) * (cCounter + 1.5), (rowGap * (rowCounter - 1) + 200) + thumbHeight/2 + 30);
    bottomBar = scaleNSY((rowGap * (rowCounter) + anchors[section]) + thumbHeight/2 + 30);
    //scaleNSY(280 + ((300) * rowCounter)) + scaleX(thumbHeight/2);
    if (scaleX(thumbHeight) < 90 && numPerRow >= 2) {
      numPerRow --;
      thumbHeight *= 1.3;
      thumbWidth *= 1.3;
    }
    if (scaleX(thumbHeight) > 130) {
      numPerRow ++;
      thumbHeight /= 1.3;
      thumbWidth /= 1.3;
    }

    if (numPerRow > favs.length) {
      numPerRow = favs.length;
    }
  }
  anchors[section + 1] = bottomBar;
}
function checkProjectMouse() {
  section = 1;
  cCounter = 0;
  rowCounter = 0;
  for (var i = 0; i < favs.length; i++) {
    cCounter = i % numPerRow;
    if (cCounter == 0) {
      rowCounter++;
    }
    //    if (mouseX > width/(numPerRow+2) * (cCounter + 1.5) - scaleX(thumbWidth/2) && mouseX < width/(numPerRow+2) * (cCounter + 1.5) + scaleX(thumbWidth/2) && mouseY >scaleNSY(420 + ((180) * rowCounter)) - scaleX(thumbHeight) && mouseY < scaleNSY(420 + ((180) * rowCounter)) + scaleX(thumbHeight)) {
    if (buttonPressed(edWidth/(numPerRow+2) * (cCounter + 1.5) - thumbWidth/2, edWidth/(numPerRow+2) * (cCounter + 1.5) + thumbWidth/2, (rowGap * (rowCounter - 1) + 200) - thumbHeight/2, (rowGap * (rowCounter - 1) + 200) + thumbHeight/2)) {
      window.location.href = ("projects/" + projectLink[favs[i]] + "/");
    }
  }





  section = 0;

  if(buttonPressed(edMidX - 192*1.5, edMidX + 192*1.5, 270 -108*1.5,  270 +108*1.5)){
    window.location.href = ("projects/" + projectLink[featured] + "/");

  }
}


function easeInOut(x) {
  var y = -0.0976 * x + 450;
  return abs(y);
}
