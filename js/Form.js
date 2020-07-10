class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Done');
    this.greeting = createElement('h2');
    this.input2 = createInput("Yes/No");
    this.input3 = createInput("Yes/No");
    this.input4 = createInput("Yes/No");
  

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.input2.hide();
    this.input3.hide();
    this.input4.hide();
    
    this.q1.hide();
    this.q2.hide();
    this.q3.hide();

  }

  display(){
    var title = createElement('h2')
    title.html("Type Your Name and Answer the Questions below");
    title.position(displayWidth/3, 0);
    this.input.position(displayWidth/2, displayHeight/2-200);

    var q1 = createElement('h2');
    var q2 = createElement('h2');
    var q3 = createElement('h2');
    q1.html("Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?")
    q1.position(displayWidth/7, displayHeight-500)
    this.input2.position(displayWidth/2, displayHeight/2-50);
    q2.html("Would you be willing to contribute a small amount every month for such a program?")
    q2.position(displayWidth/5,displayHeight-350);
    this.input3.position(displayWidth/2, displayHeight/2+100);
    q3.html("How much per month would you be willing to pay?");
    q3.position(displayWidth/3,displayHeight/2+150);
    this.input4.position(displayWidth/2, displayHeight/2+250);

   // this.button.position(displayWidth/2, displayHeight/2);

    this.button.mousePressed(()=>{
     
      player.name = this.input.value();
      player.q1 = this.input2.value();
      player.q2 = this.input3.value();
      player.q3 = this.input4.value(); 
      playerCount+=1;
      player.index = playerCount;
     // player.submitScore();
      //player.updateCount(playerCount);
      player.update();
      this.hide();
      
     });

  }
  
  
}

