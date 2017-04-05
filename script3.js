
var blue = $(".blue");
var yellow = $(".yellow");
var red = $(".red");
var green = $(".green");



var lights = [blue, yellow, red, green];
var pattern = [];
var score = 0;
var delay = 2000;


function randomColor(){
  console.log("colors work");
  return lights[Math.floor(Math.random()*lights.length)];
};

 // $(".midbutton").click(function(){
 //   console.log("button works");
 //   });


   $(".midbutton").click(function compMoves() {
    pattern.push(randomColor());

  //   $(blue).addClass("active");
  //   setTimeout(function(){
  //  $(blue).removeClass("active");
  //   }, 250);
  //   $(yellow).addClass("active");
  //   setTimeout(function(){
  //   $(yellow).removeClass("active");
  //   }, 250);
  //   $(red).addClass("active");
  //   setTimeout(function(){
  //  $(red).removeClass("active");
  //   }, 250);
  //   $(green).addClass("active");
  //   setTimeout(function(){
  //  $(green).removeClass("active");
  //   }, 250);

      pattern.forEach(function(color, index) {
        setTimeout(function() {
          color.addClass('active');
        setTimeout(function() {
          color.removeClass('active');
        }, 1000);
      }, delay * index);
    });

  });




  function userMoves(){
    $(".lights").click(function(){
      console.log("button works");
      });
      $(blue).addClass("active");
      setTimeout(function(){
     $(blue).removeClass("active");
      }, 250);
      $(yellow).addClass("active");
      setTimeout(function(){
      $(yellow).removeClass("active");
      }, 250);
      $(red).addClass("active");
      setTimeout(function(){
     $(red).removeClass("active");
      }, 250);
      $(green).addClass("active");
      setTimeout(function(){
     $(green).removeClass("active");
      }, 250);

  };



// var isClicked = setInterval(active, 750);
//   clearInterval(isClicked);
//
// var userBlue = function(){
//   $(blue).click(function(){
//     $(".blue").toggleClass("active");
//   });
// };
//
// var userYellow = function(){
//   $(yellow).click(function(){
//     $(".yellow").toggleClass("active");
//   });
// };
//
// var userRed = function(){
//   $(red).click(function(){
//     $(".red").toggleClass("active");
//   });
// };
//
// var userGreen = function(){
//   $(green).click(function(){
//     $(".green").toggleClass("active");
//   });
// };



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
