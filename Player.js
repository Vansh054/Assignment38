class Player {
    constructor(){
     this.index = null;
     this.distance = 0;
     this.name = null;
    }
    readCount(){
        var playerCountvalue = database.ref('playerCount')
        playerCountvalue.on("value",function(data){
            playerCount = data.val();
        })
    }
    updateplayerCount(a){
        database.ref('/').update({
            'playerCount': a
        })
    }
    updateName(){
        var PlayerNumber = "allPlayer/Player" + this.index;
        database.ref(PlayerNumber).set({
           'name' : this.name,
           'distance': this.distance
        })  
    }
    static getallPlayer(){
       var fetchallPlayers = database.ref('allPlayer')
       fetchallPlayers.on("value",(data)=>{
           allPlayers = data.val();
       })
    }
}