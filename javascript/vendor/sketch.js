let bg;

function preload() {

bg = loadImage("images/polverini.png"); 

}

function setup() {
  createCanvas(800, 600);
  colorMode(HSB);

  // Set angle mode so that atan2() returns angles in degrees
  angleMode(DEGREES);

  describe('eyes that follow the cursor.');
}

function draw() {
  image(bg, 0, 0, width, height);
  
 

  // Draw left eye

  let leftX = 352;
  let leftY = 260;

  // Calculate angle between left eye and mouse
  let angle1 = atan2(mouseY - leftY, mouseX - leftX);

  push();
  translate(leftX, leftY);
  fill(255);
  ellipse(0, 0, 50, 50);
  rotate(angle1);
  fill(0);
  ellipse(12, 0, 25, 25);
  pop();

  // Draw right eye

  let rightX = 282;
  let rightY = 250;

  // Calculate angle between right eye and angle
  let angle2 = atan2(mouseY - rightY, mouseX - rightX);

  push();
  translate(rightX, rightY);
  fill(255);
  ellipse(0, 0, 50, 50);
  rotate(angle2);
  fill(0);
  ellipse(12.5, 0, 25, 25);
  pop();

  let x3 = 505;
  let y3 = 350;
  let angle3 = atan2(mouseY - y3, mouseX - x3);

  push();
  translate(x3, y3);
  fill(255);
  ellipse(0, 0, 50, 50);
  rotate(angle3);
  fill(0);
  ellipse(12.5, 0, 25, 25);
  pop();

  
  let x4 = 560;
  let y4 = 370;
  let angle4 = atan2(mouseY - y4, mouseX - x4);

  push();
  translate(x4, y4);
  fill(255);
  ellipse(0, 0, 50, 50);
  rotate(angle4);
  fill(0);
  ellipse(12.5, 0, 25, 25);
  pop();


}