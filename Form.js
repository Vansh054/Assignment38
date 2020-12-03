class Form {
    constructor(){
      this.inputBox = createInput("Enter the name")
      this.button = createButton("PLAY")
      this.greeting = createElement('h2')
    }
    hideForm(){
      this.inputBox.hide();
      this.button.hide();
      this.greeting.hide();
    }
    display(){
       var heading = createElement('h2') 
       heading.html("Trex Game")
       heading.position(displayWidth/2 + 20,20)
       this.inputBox.position(displayWidth/2 - 1,displayHeight/2 - 100)
       this.button.position(displayWidth/2 + 60,displayHeight/2 - 60)
       player.readCount();
       this.button.mousePressed(()=>{
           this.inputBox.hide();
           this.button.hide();
           player.name = this.inputBox.value();
           playerCount = playerCount + 1;
           player.index = playerCount;
           player.updateplayerCount(playerCount);
           player.updateName()
           this.greeting.html("Welcome! " + player.name)
           this.greeting.position(displayWidth/2 + 20,47)
       })
  }
}