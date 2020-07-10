var canvas, backgroundImage;

var database;

var playerCount = 0;
var form, player;


function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
 
  form = new Form();
  player = new Player();
}

function draw(){
  form.display();
  
}

  