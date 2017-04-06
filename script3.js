
var blue = $(".blue");
var yellow = $(".yellow");
var red = $(".red");
var green = $(".green");
// var str=$(blue).clone().wrap('<div/>').parent().html();
// var str=$(yellow).clone().wrap('<div/>').parent().html();
// var str=$(red).clone().wrap('<div/>').parent().html();
// var str=$(green).clone().wrap('<div/>').parent().html();
// var str=$(midbutton).clone().wrap('<div/>').parent().html();


var lights = [blue, yellow, red, green];
var pattern = [];
var user = [];
var score = 0;
var delay = 800;





// var audio = $("#mysoundclip")[0];
// $(".midbutton").click(function() {
//
//     console.log("this is the audio button");
//     audio.play();
// });


function randomColor(){
  console.log("colors work");
  return lights[Math.floor(Math.random()*lights.length)];
}



   $(".midbutton").click(function compMoves() {
    pattern.push(randomColor());
      pattern.forEach(function(color, index) {
        setTimeout(function() {
          $(color).addClass('active');
        setTimeout(function() {
          $(color).removeClass('active');
        }, 500);
      }, delay * index);
    });

  });





  blue.click(function userMoves() {
    user.push($(this).text());
    if((user.length-1) != (pattern.length-1)){
      alert("IT SURE WOULD");
    }else {
      pattern.push(randomColor());
      pattern.forEach(function(color, index) {
      setTimeout(function() {
        $(color).addClass('active');
      setTimeout(function() {
        $(color).removeClass('active');
      }, 500);
    }, delay * index);
  });
}

  $(".blue").toggleClass('active');
  setTimeout(function() {
    $(".blue").toggleClass('active');
  }, 500);
});


    yellow.click(function userMoves() {
      user.push($(this).text());
      if((user.length-1) != (pattern.length-1)){
        alert("BE GREAT");
      } else {
        pattern.push(randomColor());
        pattern.forEach(function(color, index) {
        setTimeout(function() {
          $(color).addClass('active');
        setTimeout(function() {
          $(color).removeClass('active');
        }, 500);
      }, delay * index);
    });
    yellow.click(function(){
      $(".yellow").toggleClass("active");
      setTimeout(function() {
        $(".yellow").toggleClass('active');
      }, 500);
    });
  }
});


red.click(function userMoves() {
  user.push($(this).text());
  if((user.length-1) != (pattern.length-1)){
    alert("IF I COULD");
  } else {
    pattern.push(randomColor());
    pattern.forEach(function(color, index) {
    setTimeout(function() {
      $(color).addClass('active');
    setTimeout(function() {
      $(color).removeClass('active');
    }, 500);
  }, delay * index);
});
red.click(function(){
  $(".red").toggleClass("active");
  setTimeout(function() {
    $(".red").toggleClass('active');
  }, 500);
});
}
});

green.click(function userMoves() {
  user.push($(this).text());
  if((user.length-1) != (pattern.length-1)){
    alert("FIGURE THIS OUT");
  } else {
    pattern.push(randomColor());
    pattern.forEach(function(color, index) {
    setTimeout(function() {
      $(color).addClass('active');
    setTimeout(function() {
      $(color).removeClass('active');
    }, 500);
  }, delay * index);
});
green.click(function(){
  $(".green").toggleClass("active");
  setTimeout(function() {
    $(".green").toggleClass('active');
  }, 500);
});
}
});



  //     setTimeout(function() {
  //     $(".blue").addClass('active');
  //     setTimeout(function() {
  //     $(".blue").removeClass('active');
  //     }, 1000);
  //   });
  //     setTimeout(function() {
  //       $(yellow).addClass('active');
  //     setTimeout(function() {
  //       $(yellow).removeClass('active');
  //     }, 1000);
  //   });
  //   setTimeout(function() {
  //     $(red).addClass('active');
  //   setTimeout(function() {
  //     $(red).removeClass('active');
  //   }, 1000);
  // });
  //   setTimeout(function() {
  //     $(green).addClass('active');
  //   setTimeout(function() {
  //     $(green).removeClass('active');
  //   }, 1000);
  // });





// $(blue).click(function(){
//   $(".blue").toggleClass("active");
//   setTimeout(function() {
//     $(".blue").toggleClass('active');
//   }, 500);
// });
// $(yellow).click(function(){
//   $(".yellow").toggleClass("active");
//   setTimeout(function() {
//     $(".yellow").toggleClass('active');
//   }, 500);
// });
// $(red).click(function(){
//   $(".red").toggleClass("active");
//   setTimeout(function() {
//     $(".red").toggleClass('active');
//   }, 500);
// });
// $(green).click(function(){
//   $(".green").toggleClass("active");
//   setTimeout(function() {
//     $(".green").toggleClass('active');
//   }, 500);
// });
