class Color {
  constructor(name){
    this.name = name;
    // this.selected = selected;
  }
}

var blue = new Color($("#one").css("background-color", "pink"));
var yellow = new Color($("#two").css("background-color", "pink"));
var red = new Color($("#three").css("background-color", "pink"));
var green = new Color($("#four").css("background-color", "pink"));

var randomColor = function(){
  console.log("colors work");
  return Color[Math.floor(Math.random()*Color.length)];
};

var game = [];
var compMoves = 0;
var userMoves = 0;
var score = 0;
var newScore = $(".scoreboard").text(score);


  $(".midbutton").click(function(){
    console.log("button works");
    game.push(randomColor());
    compMoves=0;
    yourTurn();
  })


var yourTurn = function(){
  alert("now you go");
  $(".lights").click(function(){
    return userMoves;
    if (userMoves != ($this.randomColor)){
      alert("GAME OVER.")
    } else {
      game.push(randomColor);
      compMoves++;
      score+1;
      newScore();
      yourTurn();
    }
  });
};
