class Color {
  constructor(name){
  this.name = name;
  }
}

var blue = new Color (".blue");
var yellow = new Color (".yellow");
var red = new Color (".red");
var green = new Color (".green");

var panels = ["blue", "yellow", "red", "green"];
var pattern = [];
var compMoves = 0;
var userMoves = 0;
var score = 0;

var active = function (){
  $(panels[i]).toggleClass('active');
};

for (i=0; i<panels.length; i++){
  pattern.push(i);
}


var isClicked = setInterval(active, 750);

$(".midbutton").click(function(){
  console.log("button works");
  clearInterval(isClicked);
});

$(".panels").click(function(){
  active();
});
