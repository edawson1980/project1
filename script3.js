// class Color {
//   constructor(name){
//   this.name = name;
//   }
// }

var blue = $(".blue");
var yellow = $(".yellow");
var red = $(".red");
var green = $(".green");



var lights = [blue, yellow, red, green];
var pattern = [];
var compMoves = 0;
var userMoves = 0;
var score = 0;

var active = function (){
  (index.pattern).toggleClass('active');
};

// lights.forEach(function(currentLight){
//   console.log("this is called");
//   currentLight.toggleClass('active');
// });


var randomColor = function(){
  console.log("colors work");
  return lights[Math.floor(Math.random()*lights.length)];
};
 compMoves = function(){
   pattern.push(randomColor());
 };


   blue.addClass("active");
   //timer//
   blue.removeClass("active");

   yellow.addClass("active");
   //timer//
   yellow.removeClass("active");

   red.addClass("active");
   //timer//
   red.removeClass("active");

   green.addClass("active");
   //timer//
   green.removeClass("active");



var isClicked = setInterval(active, 750);
  clearInterval(isClicked);

$(".midbutton").click(function(){
  console.log("button works");
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
