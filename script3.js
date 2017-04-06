
var blue = $(".blue");
var yellow = $(".yellow");
var red = $(".red");
var green = $(".green");
var str=$(blue).clone().wrap('<div/>').parent().html();
var str=$(yellow).clone().wrap('<div/>').parent().html();
var str=$(red).clone().wrap('<div/>').parent().html();
var str=$(green).clone().wrap('<div/>').parent().html();



var lights = [blue, yellow, red, green];
var pattern = [];
var user = [];
var score = 0;
var delay = 2000;

lights.toString();




function randomColor(){
  console.log("colors work");
  return lights[Math.floor(Math.random()*lights.length)];
}

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
          $(color).addClass('active');
        setTimeout(function() {
          $(color).removeClass('active');
        }, 1000);
      }, delay * index);
    });

  });




  $("blue").click(function userMoves(){
    setTimeout(function() {
      $("blue").addClass('active');
    setTimeout(function() {
      $("blue").removeClass('active');
    }, 1000);
  });
})
  //     if (userMoves == valueOf[pattern]){
  //       alert("GAME OVER");
  //     } else {
  //       $(".midbutton").click(function compMoves() {
  //        pattern.push(randomColor());
  //     });
  //   }
  // });

    //   console.log("button works");
    //   });

      setTimeout(function() {
        $(yellow).addClass('active');
      setTimeout(function() {
        $(yellow).removeClass('active');
      }, 1000);
    });
    setTimeout(function() {
      $(red).addClass('active');
    setTimeout(function() {
      $(red).removeClass('active');
    }, 1000);
  });
  setTimeout(function() {
    $(green).addClass('active');
  setTimeout(function() {
    $(green).removeClass('active');
  }, 1000);
});




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
  setTimeout(function() {
    $(".blue").toggleClass('active');
  }, 1000);
});
$(yellow).click(function(){
  $(".yellow").toggleClass("active");
  setTimeout(function() {
    $(".yellow").toggleClass('active');
  }, 1000);
});
$(red).click(function(){
  $(".red").toggleClass("active");
  setTimeout(function() {
    $(".red").toggleClass('active');
  }, 1000);
});
$(green).click(function(){
  $(".green").toggleClass("active");
  setTimeout(function() {
    $(".green").toggleClass('active');
  }, 1000);
});
