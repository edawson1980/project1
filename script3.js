class Color {
  constructor(name){
  this.name = name;
  }
}

var blue = new Color (".blue");
var yellow = new Color (".yellow");
var red = new Color (".red");
var green = new Color (".green");

lights[1] = "yellow";

var lights = ["blue", "yellow", "red", "green"];
var pattern = [];
var compMoves = 0;
var userMoves = 0;
var score = 0;

var active = function (){
  $(lights[i]).toggleClass('active');
};

for (i=0; i<lights.length; i++){
  pattern.push(i);
}


var isClicked = setInterval(active, 750);

$(".midbutton").click(function(){
  console.log("button works");
  clearInterval(isClicked);
});

$(".blue").click(function(){
  $(".blue").toggleClass('active');
});
$(".yellow").click(function(){
  $(".yellow").toggleClass('active');
});
$(".red").click(function(){
  $(".red").toggleClass('active');
});
$(".green").click(function(){
  $(".green").toggleClass('active');
});
