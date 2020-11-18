class Game{

constructor(){

}
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });
  }


  update(state){
    database.ref('/').update({
      gameState: state
    });
  }


  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
      var manThing = createSprite(200,200,50,50);
      manThing.addImage(man);
    }


}


play(){
  form.hide();



  Player.getPlayerInfo();
  
  if(allPlayers !== undefined){
   background(jungle);
   
if(keyIsDown(87)){
  //var ellipse = createSprite(200,200,50,50);
 //ellipse.addImage(man);
 
}
drawSprites();

  }

  //drawSprites();
}

  }