

function myLine (x1, y1, x2, y2)
{
  // insert your code here to draw a line from (x1, y1) to (x2, y2) 
  // using only calls to point().
  
  // your code should implement the Midpoint algorithm
  if(x1>x2){
    let x3=x1,y3=y1;
    x1=x2;
    y1=y2;
    x2=x3;
    y2=y3;
  }
  if (y2>y1){
    if(x2-x1>y2-y1){
      midpointLine (x1, y1, x2, y2,0);
    }
    else{
      midpointLine (y1, x1, y2, x2,3);
      
    }
  }
  else{
    if(x2-x1>y1-y2){
      midpointLine (x1, -y1, x2, -y2,1);
    }
    else{
      midpointLine (-y1, x1, -y2, x2,2);
    }
    
  }
}

function midpointLine (x1, y1, x2, y2,mo)
{
  
  dy=y2-y1;
  dx=x2-x1;
  dE=2*dy;
  dNE=2*(dy-dx);
  d=dE-dx;
  for (let x=x1,y=y1; x<=x2;++x){
    if(mo==0){
      point(x,y);
    }
    if (mo==1){
      point(x,-y);
    }
    if (mo==2){
      point(y,-x);
    }
    if (mo==3){
      point(y,x);
    }
    if (d<=0){
      d+=dE;
    }
    else {
      ++y;
      d+=dNE;
    }
    
  }
  
}

function myTriangle (x0, y0, x1, y1, x2, y2){
  if (Ev(x0,y0,x1,y1,x2,y2)<0){
    myTriangle (x1, y1, x0, y0, x2, y2);
  }
  else{
    for (let x=min([x0,x1,x2]);x<=max([x0,x1,x2]);++x){
      for (let y=min([y0,y1,y2]);y<=max([y0,y1,y2]);++y){
        if (Ev(x0,y0,x1,y1,x,y)>=0 && Ev(x1,y1,x2,y2,x,y)>=0 && Ev(x2,y2,x0,y0,x,y)>=0){
  
          point(x,y);
        }
      }
      
    }
  }
  
}
function Ev(x0,y0,x1,y1,x2,y2) {
  return (x2-x0)*(y1-y0)-(y2-y0)*(x1-x0);
}

// --------------------------------------------------------------------------------------------
//
//  Do not edit below this lne
//
// --------------------------------------------------------------------------------------------

let doMine;
let scene;
let backgroundColor;

function setup () 
{
  createCanvas (500, 500);
  doMine = true;
  scene = 1;
  backgroundColor = color (150, 150, 150);
  background (backgroundColor);
}

function draw ()
{
  fill (0,0,0);
    if (doMine) text ("my solution", 20, 475);
    else text ("reference", 20, 475);
    
  if (scene == 1) doLines();
  if (scene == 2) doHouse();
  
}

function doHouse()
{
  if (!doMine) {
    fill (255, 0, 0);
    stroke (255,0,0);
    triangle (200, 300, 300, 200, 200, 200);
    triangle (300, 300, 300, 200, 200, 300);
    fill (0, 0, 255);
    stroke (0,0,255);
    triangle (200,200, 300, 200, 250, 150);
    stroke (0,255,0);
    fill (0,255,0);
    triangle (250, 300, 275, 300, 250, 250);
    triangle (275, 300, 275, 250, 250, 250);
  }
  else {
    fill (128, 0, 0);
    stroke (128,0,0);
    myTriangle (200, 300, 300, 200, 200, 200);
    myTriangle (300, 300, 300, 200, 200, 300);
    fill (0, 0, 128);
    stroke (0,0,128);
    myTriangle (200,200, 300, 200, 250, 150);
    stroke (0,128,0);
    fill (0,128,0);
    myTriangle (250, 300, 275, 300, 250, 250);
    myTriangle (275, 300, 275, 250, 250, 250);
  }
}

function doLines()
{
  if  (!doMine) {
    stroke (255, 255, 255);
    line (50, 250, 450, 250);
    line (250, 50, 250, 450);
    line (50, 450, 450, 50);
    line (50, 50, 450, 450);
  }
  else {
    stroke (0, 0, 0);
    myLine (50, 250, 450, 250);
    myLine (250, 50, 250, 450);
    myLine (50, 450, 450, 50);
    myLine (50, 50, 450, 450);
  }
}

function keyPressed()
{
  if (key == '1') 
  {
    background (backgroundColor);
    scene = 1;
  }
  
  if (key == '2') 
  {
    background (backgroundColor);
    scene = 2;
  }
  
  if (key == 'm') 
  {
    background (backgroundColor);
    doMine = !doMine;
  }
}