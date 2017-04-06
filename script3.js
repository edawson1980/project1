
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
var delay = 800;

lights.toString();




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





  $("blue").click(function userMoves() {
    user.push($(this).val());
    if((user.lastIndexOf()) !== (pattern.lastIndexOf())){
      alert("GAME OVER");
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
    }
  });
    $(".blue").toggleClass("active");
    setTimeout(function() {
      $(".blue").toggleClass('active');
    }, 500);

    $("yellow").click(function userMoves() {
      user.push($(this).val());
      if((user.lastIndexOf()) !== (pattern.lastIndexOf())){
        alert("GAME OVER");
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
    $(yellow).click(function(){
      $(".yellow").toggleClass("active");
      setTimeout(function() {
        $(".yellow").toggleClass('active');
      }, 500);
    });
  }
});


$("red").click(function userMoves() {
  user.push($(this).val());
  if((user.lastIndexOf()) !== (pattern.lastIndexOf())){
    alert("GAME OVER");
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
$(red).click(function(){
  $(".red").toggleClass("active");
  setTimeout(function() {
    $(".red").toggleClass('active');
  }, 500);
});
}
});

$("green").click(function userMoves() {
  user.push($(this).val());
  if((user.lastIndexOf()) !== (pattern.lastIndexOf())){
    alert("GAME OVER");
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
$(green).click(function(){
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
