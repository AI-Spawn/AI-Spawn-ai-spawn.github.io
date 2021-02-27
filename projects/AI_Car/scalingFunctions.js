







// function scaleX(x) {
//   x = x/1536*windowWidth;
//
//   return x;
// }
// function scaleY(h) {
//   h = h/751*windowHeight;
//   return h;
// }
// function scaleNSY(y) {
//   y = scaleX(edHeight/(edHeight/y));
//   return y;
// }

function windowResized() {
  var screenX = (windowWidth - width) / 2;
  var screenY = (windowWidth/2);
  cnv.position(screenX, screenY);
}
