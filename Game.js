class Game 
{
    constructor(){

    }
    readState(){
        var gameStatevalue = database.ref('gameState')
        gameStatevalue.on("value",function(data){
            gameState = data.val();
        })
    }
    updateState(a){
        database.ref('/').update({
            'gameState': a
        })
    }
      
  
    startGame(){
      if (gameState == 0)
      {
        player =new Player();
        form = new Form();
        form.display();
      }
     
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided", trex_collided);
  trex.scale = 0.5;

  trex1 = createSprite(50,160,20,50);
  trex1.addAnimation("running", trex_running);
  trex1.addAnimation("collided", trex_collided);
  trex1.scale = 0.5;

  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;

  players.push(trex);
  players.push(trex1);

  //text("Score: "+ score, 500,50);
  
}
    playGame(){
        form.hideForm();
        Player.getallPlayer();

      if (allPlayers != undefined){
          background("white")
         
        var x = 170;
        var y = 0;
        var i = 0;
        for(var p in allPlayers)
        {
         console.log("hi")
         x = 50
         y += 160
         players[i].x = x 
         players[i].y = y
         if (i + 1 == player.index)
         {
             fill("red")
             ellipse(x,y,50)
      if(GAMESTATE == "PLAY"){
        
      

        ground.velocityX = -(4 + 3* score/100)
        score = score + Math.round(getFrameRate()/60);
    
        if (ground.x < 0){
          ground.x = ground.width/2;
        }
      
        if(keyCode == 32) {
             players[i].velocityY = -5;
        }
      
        players[i].y = players[i].y + 0.8
      
        spawnClouds();
        spawnObstacles();
        
        if(obstaclesGroup.isTouching(trex)){
            GAMESTATE = "END"
        }
      }
       else if (GAMESTATE == "END") {
       
        gameOver = createSprite(750,100);
        gameOver.addImage(gameOverImg); 
        gameOver.scale = 0.5;
      
          trex.changeAnimation("collided", trex_collided);
        
          ground.velocityX = 0;
         /*  player[i].velocityY = 0 */
        
        obstaclesGroup.setLifetimeEach(-1);
        cloudsGroup.setLifetimeEach(-1);
         
         obstaclesGroup.setVelocityXEach(0);
         cloudsGroup.setVelocityXEach(0);  
       }
    
      //players[i].collide(invisibleGround);
      
        
        
      }
      i = i + 1;
    
     }
  }
  drawSprites();
}
}