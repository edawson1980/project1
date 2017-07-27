var btnID = "";
var seqArray = [];
var i = 0;
var running = false;
var interval = null;
var playerTurns = 0;
var winRounds = 20;

var bluesnd = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var yellowsnd = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var redsnd = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var greensnd = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
var wrongAns = new Audio('http://scottemcwilliams.com/imagedep/242503__gabrielaraujo__failure-wrong-action.wav');

$("#power").on('click', function() {

  $("#power").css({"float": "right"});

  if (running) {
    $("#power").css({"float": "left"});
    running = false;
    $("#score").html("off");
    seqArray = [];
    i = 0;
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return;
  }
  running = true;
  $("#score").html("0");

  $(".midbutton").on('click', function(e) {

    if (!running) {
      return;
    }
    $("#score").html("off");
    seqArray = [];
    i = 0;
    this.i = 0;
    var btnID = "";
    var playerTurns = 0;
    if (interval) {
      clearInterval(interval);
      interval = null;
    }

    nextRnd();
  });

});

$('.blue').on('mousedown', function() {
  if (!running) {
    return;
  }
  $(this).addClass('active');
  bluesnd.play();

}).on('mouseup', function() {
  if (!running) {
    return;
  }
  $(this).removeClass('active');
});

$('.yellow').on('mousedown', function() {
  if (!running) {
    return;
  }
  $(this).addClass('active');

  yellowsnd.play();

}).on('mouseup', function() {
  if (!running) {
    return;
  }
  $(this).removeClass('active');
});

$('.red').on('mousedown', function() {
  if (!running) {
    return;
  }
  $(this).addClass('active');

  redsnd.play();

}).on('mouseup', function() {
  if (!running) {
    return;
  }
  $(this).removeClass('active');
});

$('.green').on('mousedown', function() {
  if (!running) {
    return;
  }
  $(this).addClass('active');

  greensnd.play();

}).on('mouseup', function() {
  if (!running) {
    return;
  }
  $(this).removeClass('active');
});

function player(btnPush) {

  console.log("Player");

  if (!running) {
    return;
  }

  btnID = ("light" + btnPush);
  console.log("btnID = " + btnID);

  endCheck(btnPush, playerTurns);
  playerTurns++;

  if (playerTurns < seqArray.length) {
    return;
  }

  nextRnd();
}

function endCheck(btnPush, i) {

  if (i > winRounds) {
    alert("winner!");
    $("#score").html("--");
    seqArray = [];
    i = 0;
    this.i = 0;
    var btnID = "";
    var playerTurns = 0;
    if (interval) {
      clearInterval(interval);
      interval = null;
    }

  } else if ((btnPush !== seqArray[i])) {
    $("#score").html("!!");
    wrongAns.play();

    $("#score").html("--");
    alert('GAME OVER');
    seqArray = [];
    this.i = 0;
    var btnID = "";
    var playerTurns = 0;
    if (interval) {
      clearInterval(interval);
      interval = null;
    }

  }

}

function nextRnd() {
  $("#score").html(i + 1);

  seqArray.push(getRandomArbitrary(1, 5));
  playSeq(seqArray);
  i++;
}

$(".tile").on('click', function() {
  if (running == false) {
    return;
  }

  btnPush = Number(this.id);

  player(btnPush);

});

function playerTurn() {
  playerTurns = 0;
}

function playSeq(seqArray) {

  var j = 0;

  if (interval === null) {
    interval = setInterval(function() {
      playIt(seqArray[j]);
      flashIt(seqArray[j]);

      j++;
      if (j >= seqArray.length) {
        clearInterval(interval);
        interval = null;
        playerTurn();
      }
    }, 1000);
  }
} // End playSeq

function flashIt(j) {

  if (j == 1) {
    $(".blue").addClass('active');
    setTimeout(function() {
      $(".blue").removeClass('active');
    }, 300);
  };

  if (j == 2) {
    $(".yellow").addClass('active');
    setTimeout(function() {
      $(".yellow").removeClass('active');
    }, 300);
  };

  if (j == 3) {
    $(".red").addClass('active');
    setTimeout(function() {
      $(".red").removeClass('active');
    }, 300);

  };

  if (j == 4) {
    $(".green").addClass('active');
    setTimeout(function() {
      $(".green").removeClass('active');
    }, 300);
  };
} // End flashIt

function playIt(j) {
  if (j == 1) {
    bluesnd.play();
  };

  if (j == 2) {
    yellowsnd.play();
  };
  if (j == 3) {
    redsnd.play();
  };
  if (j == 4) {
    greensnd.play();
  };
} // End playIt

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
} // End getRandomArbitrary
