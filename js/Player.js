class Player{
    constructor()
    {
      this.index = null;
      this.name = null;
      this.q1 = null;
      this.q2 = null;
      this.q3 = null;
      

    }
    display(){
      
    }

   

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({
          emailid: this.name,
          question1: this.q1,
          question2: this.q2,
          question3: this.q3
    
        });
      }

      
  
    }

    
    