function move() {

  if (left) {
    degrees -= turnSpeed;
    // while((152 < degrees && degrees < 154) || (332 < degrees && degrees < 334) ||(209 < degrees && degrees < 211) ||(29 < degrees && degrees < 31) || ((0 < degrees && degrees < 1) || (559 < degrees)) || (179 < degrees && degrees < 181) ||(89 < degrees && degrees < 91) ||(269 < degrees && degrees < 721)){
    //   degrees -= turnSpeed;
    // }

  }
  if (right) {
    degrees += turnSpeed;
    //
    // while((152 < degrees && degrees < 154) || (332 < degrees && degrees < 334) ||(209 < degrees && degrees < 211) ||(29 < degrees && degrees < 31) || ((0 < degrees && degrees < 1) || (559 < degrees)) || (179 < degrees && degrees < 181) ||(89 < degrees && degrees < 91) ||(269 < degrees && degrees < 721)){
    //   degrees += turnSpeed;
    // }

  }


  if (forward) {
    carX += speed * sin(radians(degrees));
    carY -= speed * cos(radians(degrees));

  }
}
