function changeOrigin() {
  translate(0, height);  //moves the origin to bottom left
  scale(1, -1);  //flips the y values so y increases "up"
}

function defineSquare() {
  const square = {
    l: 50,
    x: 150,
    y: 150,
  };
  
  square.centerX = (square.x + (square.x+square.l))/2;
  square.centerY = (square.y + (square.y+square.l))/2;
  
  return square;
}

function drawSquare(squareObject, color) {
  fill(color);
  rect(squareObject.x, squareObject.y, squareObject.l, squareObject.l);
}

function drawCircle(circleObject, color) {
  fill(color);
  circle(circleObject.x, circleObject.y, 10);
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  changeOrigin();
  
  const square = defineSquare();
  
  let x = (square.centerX + (square.centerX + square.l/2))/2;
  let y = square.y;
  
  //translate(-x, -y);
  rotate(90);
  
  drawSquare(square, color(255, 255, 255));
  
}
