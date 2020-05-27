function textS(inputText, x, y) {
  var newY = y + anchors[section];

  text(inputText, scaleX(x), scaleNSY(newY));
}
function imageS(i, x, y, w, h) {
  y += anchors[section];

  image(images[i], scaleX(x), scaleNSY(y), scaleX(w), scaleX(h));
}



function textSizeS(s) {
  s /= 2;
  s = scaleX(s);
  s *= 2;
  textSize(s);
}
function rectS(x, y, w, h) {
  y += anchors[section];
  if (w != width) {
    w = scaleX(w);
  }
  rect(scaleX(x), scaleNSY(y), (w), scaleX(h));
}
function ellipseS(x, y, w, h) {
  y += anchors[section];

  ellipse(scaleX(x), scaleNSY(y), scaleX(w), scaleX(h));
}
function buttonPressed(l, r, t, b) {
  t += anchors[section];
  b += anchors[section];
  if (mouseX > scaleX(l) && mouseX < scaleX(r) && mouseY > scaleX(t) && mouseY < scaleX(b)) {
    return true;
  } else {
    return false;
  }
}
function bottomBar(y) {
  y = scaleNSY(y);
  return y;
}









function scaleX(x) {
  x = x/1536*windowWidth;

  return x;
}
function scaleY(h) {
  h = h/751*windowHeight;
  return h;
}
function scaleNSY(y) {
  y = scaleX(edHeight/(edHeight/y));
  return y;
}

function windowResized() {
  resizeCanvas(windowWidth, max(anchors[anchors.length - 1] + scaleNSY(0), windowHeight/2));
  midX = windowWidth/2;
  edHeight = scaleX(751);
}
