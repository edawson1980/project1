// class Color {
//   constructor(name){
//   this.name = name;
//   }
// }

var blue = $(".blue");
var yellow = $(".yellow");
var red = $(".red");
var green = $(".green");

// lights[1] = "yellow";

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
var randomColor = function(){
  console.log("colors work");
  return Color[Math.floor(Math.random()*Color.length)];
};

var isClicked = setInterval(active, 750);

$(".midbutton").click(function(){
  console.log("button works");
  clearInterval(isClicked);
});

$(blue).click(function(){
  $(".blue").toggleClass('active');
});
$(yellow).click(function(){
  $(".yellow").toggleClass('active');
});
$(red).click(function(){
  $(".red").toggleClass('active');
});
$(green).click(function(){
  $(".green").toggleClass('active');
});
