var tutorialMap, bg, playerImage, player, W, A, S, D, WE, AE, DE;
var gameState = "tutorialState";
var textState;
var dungeonMap, dungeonTransition, cavemenTransition;
var time = 3;

function preload() {

  tutorialMap = loadImage("Tutorial.png");
  dungeonMap = loadImage("Dungeon.png");
  
  playerImage = loadImage("Player.png");
  W = loadAnimation("W1.png", "W2.png");
  A = loadAnimation("A1.png", "A2.png");
  S = loadAnimation("S1.png", "S2.png");
  D = loadAnimation("D1.png", "D2.png");

  WE = loadImage("WE.png");
  AE = loadImage("AE.png");
  DE = loadImage("DE.png");

  dungeonTransition = loadAnimation("DungeonT1.png", "DungeonT2.png");
  cavemenTransition = loadAnimation("CavemenT1.png", "CavemenT2.png");

}

function setup() {

  createCanvas(400, 400);

  bg = createSprite(200, 200, 400, 400);
  bg.addImage("cross_buns", tutorialMap);
  bg.addImage("lmao", dungeonMap);
  bg.scale = 2.9;

  player = createSprite(200, 200, 50, 50);
  player.addImage("hot_dogs", playerImage);
  player.addAnimation("pichu", A);
  player.addAnimation("pikachu", D);
  player.addAnimation("hi", S);
  player.addAnimation("pika", W);
  player.addImage("salamance", WE);
  player.addImage("raichu", AE);
  player.addImage("live", DE);
  
  transition = createSprite(200, 200, 400, 400);
  transition.addAnimation("pidgeot", dungeonTransition);
  transition.addAnimation("charizard", cavemenTransition);
  transition.visible = false;

}

function draw() {

  background("white");

  if(keyDown("W")) {
    player.y = player.y-10
    player.changeAnimation("pikachu", W);
  }

  if(keyWentUp("W")) {
    player.changeImage("salamance", WE);
  }

  if(keyDown("A")) {
    player.x = player.x-10
    player.changeAnimation("pichu", A);
  }

  if(keyWentUp("A")) {
    player.changeImage("raichu", AE);
  }

  if(keyDown("S")) {
    player.y = player.y+10
    player.changeAnimation("hi", S);
  }

  if(keyWentUp("S")) {
    player.changeImage("bye", playerImage);
  }

  if(keyDown("D")) {
    player.x = player.x+10
    player.changeAnimation("die", D);
  }

  if(keyWentUp("D")) {
    player.changeImage("live", DE);
  }

  if(gameState === "tutorialState") {

    bg.changeImage("cross_buns", tutorialMap);

  }

  if(gameState === "dungeonState") {

    player.x = 50;
    player.y = 100;

    transition.changeAnimation("pidgeot", dungeonTransition);
    transition.visible = true;

    if(frameCount%30 === 0) {
      time = time - 1;
    }

    if(time === 0) {
      transition.visible = false;
      time = 3;
    }

    bg.changeImage("lmao", dungeonMap);

    if(player.x>350 && player.y<0) {

      gameState = "cavemen"

    }

  }

  if(gameState === "cavemen") {

    player.x = 200;
    player.y = 200;

    transition.changeAnimation("charizard", cavemenTransition);
    transition.visible = true;

    if(frameCount%30 === 0) {
      time = time - 1;
    }

    if(time === 0) {
      transition.visible = false;
      time = 3;
    }

  }

  drawSprites();

  textSize(10);
  fill("red");

  if(gameState === "tutorialState") {
    text("Hi! Press Enter to keep reading.", 75, 300);
    textState = 2;
  } if(textState === 2 && keyWentDown(ENTER)) {
    text("Now, do you remember your name? I suppose not.", 75, 300);
    textState = 3;
  } else if(gameState === "tutorialState" && textState === 3 && keyWentDown(ENTER)) {
    text("Oh, well, I guess I'll just call you, YOU!", 75, 300);
    textState = 4;
  } else if(gameState === "tutorialState" && textState === 4 && keyWentDown(ENTER)) {
    text("What, you don't remember if you're a boy or girl?", 75, 300);
    textState = 5;
  } else if(gameState === "tutorialState" && textState === 5 && keyWentDown(ENTER)) {
    text("Well, do you remember how to move?", 75, 300);
    textState = 6;
  } else if(gameState === "tutorialState" && textState === 6 && keyWentDown(ENTER)) {
    text("NO?! THOMPSON, WHAT'D I SAY ABOUT EXPERIMENTING ON HUMANS BEFORE MICE?!", 75, 300);
    textState = 7;
  } else if(gameState === "tutorialState" && textState === 7 && keyWentDown(ENTER)) {
    text("Experiment, dear? Pretty sure you READ that wrong.", 75, 300);
    textState = 8;
  } else if(gameState === "tutorialState" && textState === 8 && keyWentDown(ENTER)) {
    text("Oh, um, try to move using the WASD keys and press enter when you've learned how to move.", 75, 300);
    textState = 9;
    gameState = "dungeonState";
  } else if(gameState === "dungeonState" && textState === 9 && keyWentDown(ENTER)) {
    text("Alright, welcome to the dungeon!", 75, 300);
    textState = 10;
  } else if(gameState === "dungeonState" && textState === 10 && keyWentDown(ENTER)) {
    text("This is from where you can travel through time.", 75, 300);
    textState = 11;
  } else if(gameState === "dungeonState" && textState === 11 && keyWentDown(ENTER)) {
    text("You'll notice 5 doors. Inside all of them is a different time period.", 75, 300);
    textState = 12;
  } else if(gameState === "dungeonState" && textState === 12 && keyWentDown(ENTER)) {
    text("Now, only 1 is open right now, for you must complete it to access the rest.", 75, 300);
    textState = 13;
  } else if(gameState === "dungeonState" && textState === 13 && keyWentDown(ENTER)) {
    text("Why don't you try walking through the open one right now?", 75, 300);
    textState = 14;
  }

}