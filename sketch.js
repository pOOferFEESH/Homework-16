let myPaperBoat;

function setup() 
{
  createCanvas(600, 800);
  myPaperBoat = new paperBoat(width, height, 100);
}

function draw() 
{
  background(129, 66, 255);
  skyBackground();
  skyscrapersBack();
  skyscrapersMid();
  skyscrapersFront();
  ground();
  waterEffects();
  myPaperBoat.display();
}

function skyBackground()
{
  noStroke();
  fill(154, 66, 255);
  rect(0, height/50, width, height/1.04);
  fill(186, 66, 255);
  rect(0, height/25, width, height/1.08);
  fill(205, 66, 255);
  rect(0, height/13, width, height/1.17);
  fill(227, 66, 255);
  rect(0, height/7, width, height/1.38);
  fill(239, 66, 255);
  rect(0, height/4, width, height/1.99);
  fill(255, 66, 249);
  rect(0, height/2.5, width, height/5);
}

function skyscrapersBack()
{
  //ground
  fill(74, 62, 99);
  rect(0, height/2, width, height/50);
  //skyscrapers
  fill(74, 62, 99);
  rect(width/2, height/6, width/6, height/1.5);
  //lights
  fill(209, 207, 134);
  rect(width/2, height/4, width/7, height/100);
  fill(209, 207, 134);
  rect(width/2, height/3, width/9, height/100);
  fill(209, 207, 134);
  rect(width/2, height/5, width/9, height/100);
  fill(209, 207, 134);
  rect(width/2, height/2.4, width/6, height/100);
  //light reflection
  fill(209, 207, 134);
  rect(width/2.1, height/1.35, width/7, height/100);
  fill(209, 207, 134);
  rect(width/2, height/1.26, width/9, height/100);
  fill(209, 207, 134);
  rect(width/2, height/1.5, width/9, height/100);
  fill(209, 207, 134);
  rect(width/2, height/1.7, width/5, height/100);
  //2
  fill(74, 62, 99);
  rect(width/4, height/7, width/6, height/1.4);
  fill(209, 207, 134);
  rect(width/4, height/6, width/6, height/100);
  rect(width/4, height/5, width/6, height/100);
  rect(width/4, height/3.5, width/7, height/100);
  rect(width/4, height/2.5, width/9, height/100);
  //light reflection
  rect(width/5, height/1.21, width/6, height/100);
  rect(width/4, height/1.26, width/5, height/100);
  rect(width/4, height/1.45, width/7, height/100);
  rect(width/4.5, height/1.69, width/9, height/100);
  
  //3
  fill(74, 62, 99);
  rect(0, height/4, width/5, height/1.9);
  fill(209, 207, 134);
  rect(0, height/3, width/5, height/100);
  rect(0, height/2.8, width/5, height/100);
  rect(0, height/2.6, width/5, height/100);
  //light reflection
  rect(0, height/1.5, width/5, height/100);
  rect(0, height/1.6, width/5, height/100);
  rect(0, height/1.7, width/5, height/100);
  //4
  fill(74, 62, 99);
  rect(width/1.2, height/7, width/9, height/1.4);
  fill(209, 207, 134);
  rect(width/1.2, height/6, width/9, height/100);
  rect(width/1.2, height/5, width/9, height/100);
  rect(width/1.2, height/4, width/9, height/100);
  rect(width/1.2, height/3, width/15, height/100);
  rect(width/1.2, height/2.5, width/15, height/100);
  //light reflection
  rect(width/1.23, height/1.6, width/15, height/100);
  rect(width/1.2, height/1.45, width/15, height/100);
  rect(width/1.2, height/1.21, width/9, height/100);
  rect(width/1.2, height/1.26, width/8, height/100);
  rect(width/1.25, height/1.34, width/9, height/100);
}

function skyscrapersMid()
{
  //1
  fill(118, 102, 150);
  rect(width/1.7, height/4.5, width/5, height/1.8);
  //light
  fill(188, 245, 243);
  rect(width/1.7, height/3.7, width/5, height/50);
  rect(width/1.7, height/3.4, width/7, height/50);
  rect(width/1.7, height/2.6, width/6, height/50);
  //light reflection
  rect(width/1.7, height/1.4, width/5, height/50);
  rect(width/1.8, height/1.45, width/7, height/50);
  rect(width/1.7, height/1.65, width/4, height/50);
  
  //2
  fill(118, 102, 150);
  rect(width/14, height/6, width/6, height/1.5);
  //light
  fill(160, 207, 222);
  rect(width/14, height/4, width/8, height/50);
  rect(width/14, height/3.1, width/8, height/50);
  rect(width/14, height/2.8, width/7, height/50);
  rect(width/14, height/2.4, width/11, height/50);
  //light reflection
  rect(width/14, height/1.35, width/8, height/50);
  rect(width/14, height/1.5, width/8, height/50);
  rect(width/20, height/1.6, width/6, height/50);
  rect(width/14, height/1.84, width/11, height/50);
  
  //3
  fill(118, 102, 150);
  rect(width/1.1, height/35, width/6, height/1.06);
  //light
  fill(105, 175, 255);
  rect(width/1.1, height/20, width/6, height/50);
  rect(width/1.1, height/7, width/6, height/50);
  rect(width/1.1, height/3.2, width/19, height/50);
  rect(width/1.1, height/2.8, width/19, height/50);
  rect(width/1.1, height/2.5, width/19, height/50);
  //light reflection
  fill(105, 175, 255);
  rect(width/1.1, height/1.07, width/6, height/50);
  rect(width/1.3, height/1.2, width/4, height/50);
  rect(width/1.1, height/1.5, width/19, height/50);
  rect(width/1.1, height/1.6, width/19, height/50);
  rect(width/1.15, height/1.75, width/11, height/50);
}

function skyscrapersFront()
{
  fill(162, 145, 194);
  rect(width/3, height/2.7, width/7, height/3);
  //light
  fill(183, 245, 181);
  rect(width/3, height/2.4, width/11, height/25);
  //light reflection
  fill(183, 245, 181);
  rect(width/3.2, height/1.7, width/11, height/25);
  
  //2
  fill(162, 145, 194);
  rect(width/1.4, height/3.8, width/6, height/2.1);
  //light
  fill(183, 245, 181);
  rect(width/1.4, height/3.8, width/6, height/25);
  rect(width/1.4, height/3.1, width/9, height/25);
  //light reflection
  rect(width/1.4, height/1.42, width/5, height/25);
  rect(width/1.45, height/1.55, width/9, height/25);
}

function ground()
{
  fill(49, 87, 76);
  ellipse(width/3, height/1.8, 450, 140);
  ellipse(width/1.2, height/1.8, 450, 110);
  
  fill(69, 140, 109);
  ellipse(width/6, height/1.8, 450, 80);
  ellipse(width/2, height/1.8, 100, 50);
  ellipse(width/1.2, height/1.8, 450, 70);
  
  fill(74, 62, 99);
  rect(0, height/1.85, width, height/50);
  
  fill(125, 123, 133);
  rect(0, height/1.84, width, height/150);
  
}

function waterEffects()
{
  fill(249, 180, 250);
  ellipse(width/3, height/1.8, 100, 2);
  ellipse(width/1.3, height/1.8, 200, 2);
  ellipse(width/5, height/1.75, 100, 2);
  ellipse(width/1.7, height/1.75, 200, 2);
  ellipse(width/1.02, height/1.75, 200, 2);
  ellipse(width/8, height/1.7, 200, 2);
  ellipse(width/2, height/1.7, 200, 2);
  ellipse(width/1.3, height/1.7, 50, 2);
  ellipse(width/8, height/1.61, 300, 2);
  ellipse(width/2, height/1.61, 50, 2);
  ellipse(width/1.1, height/1.61, 400, 2);
  
  ellipse(width/8, height/1.5, 200, 6);
  ellipse(width/1.8, height/1.5, 200, 6);
  ellipse(width/1.1, height/1.5, 200, 6);
  fill(223, 176, 247);
  ellipse(width/10, height/1.35, 100, 10);
  ellipse(width/2, height/1.35, 300, 10);
  ellipse(width/1.01, height/1.35, 200, 10);
  
  ellipse(width/10, height/1.23, 300, 10);
  ellipse(width/1.7, height/1.2, 150, 10);
  ellipse(width/1.01, height/1.25, 400, 10);
  
  ellipse(width/20, height/1.1, 100, 14);
  ellipse(width/3, height/1.15, 400, 14);
  ellipse(width/1.9, height/1.1, 250, 14);
  ellipse(width/1.01, height/1.1, 200, 14);
  fill(202, 166, 247);
  ellipse(width/20, height/1.01, 400, 14);
  ellipse(width/2, height/1.05, 400, 14);
  ellipse(width/1.9, height/1.01, 100, 14);
  ellipse(width/1.01, height/1.01, 300, 14);
}

class paperBoat
{
  constructor(xpos, ypos, size) 
  {
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
  }
  
  display() 
  {
    fill(240);
    ellipse(width/2, height/1.53, 80, 10)
    fill(54, 217, 206);
    triangle(this.xpos/2, this.ypos/1.67, this.xpos/2.1, this.ypos/1.6, this.xpos/1.9, this.ypos/1.6);
    fill(82, 250, 239);
    quad(this.xpos/2.3, this.ypos/1.6, this.xpos/1.75, this.ypos/1.6, this.xpos/1.85, this.ypos/1.53, this.xpos/2.15, this.ypos/1.53);
  }
}