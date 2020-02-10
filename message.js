function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
}

function PrintE(x, y){
    line(x - 40, y - 80, x - 40, y + 25)
    line(x+20, y+25, x - 40, y+ 25 )
    line(x-40, y-80, x+15, y-80)
    line(x+20, y-25, x - 40, y- 25 )
}
function PrintA(x, y){
  line(x, y - 80, x - 40, y + 25)
  line(x, y - 80, x + 40, y + 25)
  line(x + 25, y-20, x-25, y-20)
 }
function PrintT(x, y){
      line(x-40, y-80, x+20, y-80)
      line(x-10 , y - 80, x-10 , y + 25)
      
    }
function PrintA(x, y){
  line(x, y - 80, x - 40, y + 25)
  line(x, y - 80, x + 40, y + 25)
  line(x + 25, y-20, x-25, y-20)
 }
function PrintP(x, y){
    line(x - 40, y - 80, x - 40, y + 25)
    line(x+20, y-30, x-40, y-30 )
    line(x-40, y-80, x+20, y-80)
    line(x+20, y-80, x+20, y-30)
}
 function PrintL(x, y){
   line(x+20, y+25, x - 40, y+ 25 )
    line(x - 40, y - 80, x - 40, y + 25)

  }
 function PrintE(x, y){
    line(x - 40, y - 80, x - 40, y + 25)
    line(x+20, y+25, x - 40, y+ 25 )
    line(x-40, y-80, x+15, y-80)
    line(x+20, y-25, x - 40, y- 25 )
  }

function draw(){
  PrintE(100, 100)
  PrintA(200, 100)
  PrintT(300, 100)
  PrintA(100, 250)
  PrintP(200, 250)
  PrintP(300, 250)
  PrintL(400, 250)
  PrintE(500, 250)
}
