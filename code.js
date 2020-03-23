var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["af55c0cd-7781-47df-b00d-0fa9cd2e908c","a10827ae-bf7e-459b-be24-2063517ad9d5","89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b","948032ca-676c-4ae7-b0c8-fb7ac37bec7c","d44d015c-0f5a-42d6-a705-13c534991470","62b639e0-262b-4def-aeae-9b21305fdd2e","27a6a3ea-51bb-455d-9790-dd4500e68cef","53186617-b397-4792-b0ee-a61374274332","82cd349d-0a71-49f3-9b66-f2ee881ae8d3","3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7"],"propsByKey":{"af55c0cd-7781-47df-b00d-0fa9cd2e908c":{"name":"trex","sourceUrl":null,"frameSize":{"x":524,"y":94},"frameCount":3,"looping":true,"frameDelay":4,"version":"ojGcmdwCd6Em3_2SD0EHxfZCganysTDp","loadedFromSource":true,"saved":true,"sourceSize":{"x":524,"y":282},"rootRelativePath":"assets/af55c0cd-7781-47df-b00d-0fa9cd2e908c.png"},"a10827ae-bf7e-459b-be24-2063517ad9d5":{"name":"ground1","sourceUrl":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/a10827ae-bf7e-459b-be24-2063517ad9d5.png","frameSize":{"x":1596,"y":26},"frameCount":1,"looping":true,"frameDelay":4,"version":".DT6bNpkcJRPcBEs_bbkjjwp8w7d8lC2","loadedFromSource":true,"saved":true,"sourceSize":{"x":1596,"y":26},"rootRelativePath":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/a10827ae-bf7e-459b-be24-2063517ad9d5.png"},"89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b":{"name":"ground2","sourceUrl":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b.png","frameSize":{"x":2377,"y":12},"frameCount":1,"looping":true,"frameDelay":4,"version":"Fp8QO9yOPgUJvSA25ikUyCb3v7CRMoh7","loadedFromSource":true,"saved":true,"sourceSize":{"x":2377,"y":12},"rootRelativePath":"assets/v3/animations/_zVr-Ht4cJETV573GIhR_widaY8yD24II_c3xbDv5s4/89076ad2-17ed-4cc2-a6b0-a2f2c7647f8b.png"},"948032ca-676c-4ae7-b0c8-fb7ac37bec7c":{"name":"cloud","sourceUrl":null,"frameSize":{"x":92,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"11B0xHUFF5MSWlT_M7JiVA_2PzpNOjqq","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":27},"rootRelativePath":"assets/948032ca-676c-4ae7-b0c8-fb7ac37bec7c.png"},"d44d015c-0f5a-42d6-a705-13c534991470":{"name":"obstacle1","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/d44d015c-0f5a-42d6-a705-13c534991470.png","frameSize":{"x":34,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"29kV3cbdAugLU9aE63.FlYxjMqppUdAG","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":70},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/d44d015c-0f5a-42d6-a705-13c534991470.png"},"62b639e0-262b-4def-aeae-9b21305fdd2e":{"name":"obstacle2","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/62b639e0-262b-4def-aeae-9b21305fdd2e.png","frameSize":{"x":69,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"Of6fGtu__cExzcHHR5bxNjiSOxmIYJRV","loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":70},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/62b639e0-262b-4def-aeae-9b21305fdd2e.png"},"27a6a3ea-51bb-455d-9790-dd4500e68cef":{"name":"obstacle3","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/27a6a3ea-51bb-455d-9790-dd4500e68cef.png","frameSize":{"x":102,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"H5B73fcF56SGTvHp3vcdqB3S1MUUD0nF","loadedFromSource":true,"saved":true,"sourceSize":{"x":102,"y":70},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/27a6a3ea-51bb-455d-9790-dd4500e68cef.png"},"53186617-b397-4792-b0ee-a61374274332":{"name":"obstacle4","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/53186617-b397-4792-b0ee-a61374274332.png","frameSize":{"x":50,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"aEJEOuEmmrRnF68j5Dc7fqfgt1E9XTAC","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/53186617-b397-4792-b0ee-a61374274332.png"},"82cd349d-0a71-49f3-9b66-f2ee881ae8d3":{"name":"obstacle5.png_1","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/82cd349d-0a71-49f3-9b66-f2ee881ae8d3.png","frameSize":{"x":103,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"KViv9ENdVTG3n1qCNVvcFOucBbPlyCUx","loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":100},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/82cd349d-0a71-49f3-9b66-f2ee881ae8d3.png"},"3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7":{"name":"obstacle6","sourceUrl":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7.png","frameSize":{"x":150,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"_c7bS5hZpV7cQdUxO1cqIYzxUGdp03Kb","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":100},"rootRelativePath":"assets/v3/animations/ooO3PxLhwDwe0OJ01lb5hBseMZl0poJl8G-9Bf_FKUU/3c99ad97-d7bb-4f1e-b8a0-7c6154dd7bb7.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//create a trex sprite
var trex = createSprite(200,380,20,50);
trex.setAnimation("trex");

//scale and position the trex
trex.scale = 0.5;
trex.x = 50;

//create a ground sprite
var ground = createSprite(200,380,400,20);
ground.setAnimation("ground2");
ground.x = ground.width /2;

var invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;

//generate some randome number here
var rand = randomNumber(1,100);


console.log("Hello " + 5);

function draw() {
  //set background to white
  background("white");
  
  ground.velocityX = -2;
  
  //console.log(trex.y);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //jump when the space key is pressed
  if(keyDown("space") && trex.y >= 359){
    trex.velocityY = -10 ;
  }
  
  //add gravity
  trex.velocityY = trex.velocityY + 0.8;
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(400,320,40,10);
    cloud.y = randomNumber(280,320);
    cloud.setAnimation("cloud");
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    cloud.lifetime = 134;
  }
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
