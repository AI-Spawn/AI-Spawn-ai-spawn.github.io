function keyInputs() {
  if (!adjustTrack && humanPlaying) {
    // if (keyIsDown(87)) {
    //    forward = true;
    // } else {
    //    forward = false;
    // }
    if (keyIsDown(65)) {
      left = true;
    } else {
      left = false;
    }
    if (keyIsDown(68)) {
      right = true;
    } else {
      right = false;
    }

  }

  if (keyIsDown(187)) {
    if (accuracy > 1) {
      accuracy -= 1;
    }
  }
  if (keyIsDown(189)) {
    accuracy += 1;
  }
}

function keyPressed() {
  if (key == 'v' || key == 'V') {
    showSight = !showSight;
  }
  // if (key == 'p' || key == 'P') {
  //   humanPlaying = !humanPlaying;
  // }
  if (key == 'f' || key == 'f') {
    showTrack = !showTrack;
  }
}
