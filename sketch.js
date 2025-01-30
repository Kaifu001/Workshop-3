let imgs = [];
let img1, img2, img3;

function preload() {
  img1 = loadImage('Images/Mario.webp');
  img2 = loadImage('Images/Panda.jpg');
  img3 = loadImage('Images/Racoon.jpg');
}

function setup() {
  createCanvas(400, 400);
  imgs = [img1, img2, img3,];
  let randomImg = random(imgs);
  image(randomImg, 50, 50, 300, 300);
  
  noFill();
  stroke(0);
  strokeWeight(4);
  rect(50, 50, 300, 300);
}

function draw() {
}
