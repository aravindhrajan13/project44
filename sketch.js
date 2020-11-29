const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1533,750);
    
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(630,750,1800,20);
    platform = new Ground(150, 657, 300, 170);

    box1 = new Box(635,455,50,50);
    box2 = new Box(765,455,50,50);
    pig1 = new Pig(670,419);
    log1 = new Log(700,400,200, PI/2);

    stand1 = new Stand(700,500,200,10);
    stand2 = new Stand(1250,300,200,10);

    box3 = new Box(635,385,50,50);
    box4 = new Box(765,385,50,50);
    pig2 = new Pig(670,350);
    

    log2 =  new Log(700,320,200, PI/2);

     box5 = new Box(700,300,50,50);
     log3 = new Log(660,295,100, PI/7);
     log4= new Log(735,290,100, -PI/7);

     box6 = new Box(1180,270,50,50);
     box7 = new Box(1310,270,50,50);
     log5 = new Log(1240,250,200, PI/2);
     pig3 = new Pig(1230,270);
     box8 = new Box(1170,170,50,50);
     box9 = new Box(1310,170,50,50);
     pig4 = new Pig(1230,150);
     log6 = new Log(1245,130,200, PI/2);
     box10 = new Box(1245,110,50,50);
     log7 = new Log(1210,90,100, PI/7);
     log8 = new Log(1260,80,100, -PI/7);



    bird = new Bird(218,400);

  
    slingshot = new SlingShot(bird.body,{x:218, y:400});
}

function draw(){
  if(backgroundImg)
  background(backgroundImg);

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)


    Engine.update(engine);
   // text(mouseX + ',' + mouseY, 10, 15);
   // textSize(15);
  //  fill("lightyellow");
    //strokeWeight(4);
   
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    stand1.display();
  stand2.display();

   box6.display();
   box7.display();
   log5.display();
   pig3.display();
   box8.display();
   box9.display();
   pig4.display();
 log6.display();
  box10.display();
  log7.display();
  log8.display();
    bird.display();
    platform.display();

    slingshot.display();   
    
    pig1.score();
    pig2.score();
    pig3.score();
    pig4.score();

    
}

function mouseDragged(){
 
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});


}


function mouseReleased(){
    slingshot.fly();
 
}

function keyPressed(){
    if(keyCode === 32){
      
        slingshot.attach(bird.body);
    }
}