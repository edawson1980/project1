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


var randomColor = function(){
  console.log("colors work");
  return lights[Math.floor(Math.random()*lights.length)];
};

 $(".midbutton").click(function(){
   console.log("button works");
   $(blue).addClass("active");
   setTimeout(function(){
  $(blue).removeClass("active");
   }, 250);
  });

  compMoves = function(){
    pattern.push(randomColor());



   for (i = 0; i < pattern.length; i++){
     if (pattern[i] == blue){
       blue.addClass("active");
       //timer//
       blue.removeClass("active");
    } else if (pattern[i] == yellow){
      yellow.addClass("active");
      //timer//
      yellow.removeClass("active");
    } else if (pattern[i] == red){
      red.addClass("active");
      //timer//
      red.removeClass("active");
    } else if (pattern[i] == green){
      green.addClass("active");
      //timer//
      green.removeClass("active");
    } else {

    }
  }
  };


  userMoves = function(){
    $(".lights").click(function(){
      console.log("button works");
      });
  };



// var isClicked = setInterval(active, 750);
//   clearInterval(isClicked);

var userBlue = function(){
  $(blue).click(function(){
    $(".blue").toggleClass("active");
  });
};

var userYellow = function(){
  $(yellow).click(function(){
    $(".yellow").toggleClass("active");
  });
};

var userRed = function(){
  $(red).click(function(){
    $(".red").toggleClass("active");
  });
};

var userGreen = function(){
  $(green).click(function(){
    $(".green").toggleClass("active");
  });
};



$(blue).click(function(){
  $(".blue").toggleClass("active");
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
