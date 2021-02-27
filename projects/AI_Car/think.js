var outputs = [];

function think() {
  look();
  for (let i = frameLag; i > 0; i--) {
    leftHolder[i] = leftHolder[i - 1];
    rightHolder[i] = rightHolder[i - 1];
  }
  leftHolder[0] = leftDist;
  rightHolder[0] = rightDist;
  outputs[0] = 0;
  outputs[1] = 0;
  outputs[2] = 0;
  outputs = calculate();
  console.log(outputs);
  let max = 0;
  let maxIndex = 0;

  for (let i = 0; i < outputs.length; i++) {
    if (outputs[i] > max) {
      max = outputs[i];
      maxIndex = i;
    }
  }
  console.log(maxIndex);

  if (maxIndex == 0) {
    right = false;
    left = false;
    // console.log("forward");
  } else if (maxIndex == 1) {
    left = true;
    right = false;
    // console.log("left");
  } else {
    right = true;
    left = false;
    // console.log("right");
  }
  // forward = true;

}
