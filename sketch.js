//code for sword
var sword; 
var sword_image;
var fruit1image, fruit2image,  fruits3image,  fruits4image;
var fruit1Group, fruit2Group, fruit3Group                                    
var fruit1_group, fruit2_group, fruit3_group, fruit4_group;
var monster_animation, monster_group;
var gameover_sprite, gameover_image;
var Play = 1;
var End = 0;
var gameState = Play;
var gameover_sound, sword_sound


function preload(){
 
  sword_image = loadImage("sword.png");
  fruit1image = loadImage("fruit1.png");
  fruit2image = loadImage("fruit2.png");
  
  fruits3image = loadImage("fruit3.png");
   fruits4image = loadImage("fruit4.png");
  monster_animation = loadImage("alien1.png" );
  gameover_image = loadImage("gameover.png");
  gameover_sound = loadSound("gameover.mp3");
  sword_sound = loadSound("knifeSwooshSound.mp3");
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
 
  
  //code for sword
  sword = createSprite(500,200,20,20);
  sword.addImage(sword_image);
  sword.scale=0.7
  
  score = 0;
  
 fruit1_group = new Group();
  fruit2_group = new Group();
  fruit3_group = new Group();
  fruit4_group = new Group();
  monster_group = new Group();
  
 
   
}

function draw(){
  
  background("lightblue");
  //moving background
  background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  
  //move the sword 
  sword.x = World.mouseX;
  sword.y = World.mouseY;
  
  //creating continous fruits
  var select_fruits = Math.round(random(1,4));
  
  if(World.framecount%100 === 0){
    if(select_fruits === 1){
     fruits1.addImage(fruit1image);
    }
    if(select_fruits === 2){
       fruits2.addImage(fruit2image );
    }
     if(select_fruits === 3){
       fruits3.addImage( fruits3image);
    }
     if(select_fruits === 4){
     fruits4.addImage(fruits4image);
    }
  }
   fruits1();
  fruits2();
    fruits3();
  fruits4();
  enemy();  
  
  if(sword.isTouching(fruit1_group)){
    fruit1_group.destroyEach();
   score = score + 1;
    sword_sound.play();
    
  }
  
  if(sword.isTouching(fruit2_group)){
    fruit2_group.destroyEach();
    score = score + 2;
    sword_sound.play();
  }
  
  if(sword.isTouching(fruit3_group)){
    fruit3_group.destroyEach();
    score = score +3;
    sword_sound.play();
  }
  
  if(sword.isTouching(fruit4_group)){
    fruit4_group.destroyEach();
    score = score + 4;
    sword_sound.play();
  }
  
  if(sword.isTouching(monster_group)){
    gameState = End;
    gameover_sound.play();
    }
  
  if(gameState === End){
    //stop the ground
    gameover();
    background.velocityX = 0;
    fruit1_group.setVelocityEach(0);
     fruit2_group.setVelocityEach(0);
     fruit3_group.setVelocityEach(0);
    fruit4_group.setVelocityEach(0);
    monster_group.setVelocityEach(0);
    fruit1_group.setLifetimeEach(-1);
     fruit2_group.setLifetimeEach(-1);
     fruit3_group.setLifetimeEach(-1);
    fruit4_group.setLifetimeEach(-1);
    monster_group.setLifetimeEach(-1);
    }
  
 
  
  
drawSprites();
  
  text("Score: "+ score, 500,50);
}

//create fruits function
function fruits1(){
  if(World.frameCount%60 === 0){
var fruits1;
fruits1 = createSprite(0,Math.round(random(20, 600)), 10, 10);
fruits1.scale=0.2
fruits1.addImage(fruit1image);
  fruits1.velocityX =4 ;
  fruits1.lifetime = 150;
  fruit1_group.add(fruits1);
  }
  }

function fruits2(){
   if(World.frameCount%60 === 0){
  var fruits2;
  fruits2 = createSprite(0,Math.round(random(20, 600)), 10, 10);
  fruits2.scale = 0.2;
  fruits2.velocityX = 4;
  fruits2.letime = 150;
  fruits2.addImage(fruit2image );
  fruit2_group.add(fruits2);
   }
}

function fruits3(){
  if(World.frameCount%60 === 0){
  var fruits3;
  fruits3 = createSprite(0,Math.round(random(20, 600)), 10, 10);
  fruits3.scale = 0.2;
  fruits3.velocityX = 4;
  fruits3.lifetime = 150;
  fruits3.addImage( fruits3image);
  fruit3_group.add(fruits3);
   }
}

function fruits4(){
  if(World.frameCount%60 === 0){
  var fruits4;
  fruits4 = createSprite(0,Math.round(random(20, 600)), 10, 10);
   fruits4.scale = 0.2;
  fruits4.velocityX = 4;
  fruits4.lifetime = 150;
  fruits4.addImage(fruits4image);
  fruit4_group.add(fruits4);
  }
}

 function enemy(){
   var monster;
   if(World.frameCount%200 === 0){
     monster = createSprite(400,200,20,20);
     monster.velocityX = 4;
    monster.lifetime = 150
     monster.scale = 0.7;
     monster.addImage(monster_animation);
     monster_group.add(monster);
   }
   
 }

function gameover(){
  var game_over;
   game_over = createSprite(300,300,20,20);
  game_over.addImage( gameover_image);
}

