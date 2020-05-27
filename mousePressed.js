
var buttonPressed = false;
function mousePressed() {
  /*

   fill(255);
   ellipse(width/2 + width/10, height/4, 106, 106);
   image(githubIcon, width/2 + width/10, height/4, 100, 100);


   fill(0);
   fill(255);
   image(youtubeIcon, width/2 - height/5.45, height/4, 100, 71);
   */

  // if (mouseX > scaleX(768 - 192 - 50) && mouseX < scaleX(768 - 192 + 50) && mouseY > scaleNSY(300 - 71/2) && mouseY < scaleNSY(300 + 71/2)) {
  //   window.location.href = "https://www.youtube.com/channel/UC6NT7CHGhDfkamfMZswuXVQ";
  //   buttonPressed = true;
  // } else if (mouseX > scaleX(768 + 192 - 50) && mouseX < scaleX(768 + 192 + 50) && mouseY > scaleNSY(300 - 100/2) && mouseY < scaleNSY(300 + 100/2)) {
  //   window.location.href = "https://github.com/AI-Spawn/";
  //   buttonPressed = true;
  // } else {
    checkProjectMouse(mouseX, mouseY);
  // }
}
function touchStarted() {

  // if (mouseX > scaleX(768 - 192 - 50) && mouseX < scaleX(768 - 192 + 50) && mouseY > scaleNSY(300 - 71/2) && mouseY < scaleNSY(300 + 71/2)) {
  //   window.location.href = "https://www.youtube.com/channel/UC6NT7CHGhDfkamfMZswuXVQ";
  //   buttonPressed = true;
  // } else if (mouseX > scaleX(768 + 192 - 50) && mouseX < scaleX(768 + 192 + 50) && mouseY > scaleNSY(300 - 100/2) && mouseY < scaleNSY(300 + 100/2)) {
  //   window.location.href = "https://github.com/AI-Spawn/";
  //   buttonPressed = true;
  // } else {
    checkProjectMouse(mouseX, mouseY);
  // }
}
