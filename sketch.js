var canvas;
var music1, music2, music3;
var ball,edges;
var block1,block2,block3,block4;

function preload(){
    music1 = loadSound("block_hit1.wav");
    music2 = loadSound("block_hit2.wav");
    music3 = loadSound("block_hit3.wav");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";
    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";
    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "pink";
    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "green";


    //create box sprite and give velocity
    ball = createSprite(random(20,750),random(30,300),40,40);
    ball.shapeColor = "white";

    ball.velocityX = random(5, 7);
    ball.velocityY = random(5, 7);
    
   
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    
    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = rgb(0,0,255);
        music1.play();
        music2.stop();
        music3.stop();
    }

    if(block2.isTouching(ball) && ball.collide(block2)){
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music1.stop();
        music2.stop();
        music3.stop();

    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = rgb(153,0,76);
        music2.play();
        music1.stop();
        music3.stop();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = rgb(0,100,0);
        music3.play();
        music1.stop();
        music2.stop();
    }


    drawSprites();
}