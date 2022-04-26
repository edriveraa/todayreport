
radius= 85;
steps = $('.radial > ul > li').length;
$('.radial > ul > li').each(function(i){
//for (var i = 0; i < steps; i++) {
    xValue = ((radius * Math.cos(2 * Math.PI * i / steps))-25);
    yValue = ((radius * Math.sin(2 * Math.PI * i / steps))-25);
                      $(this).children('a, div').css('left',xValue).css('top',yValue); 
 /* children = $(this).children('div').children(' ul').children('li').length;
  if(children>0){
    
    //kidsteps = $(this).children('div').children(' ul').children('li').length;
    kidsteps = 6;
    $(this).children('div').children(' ul').children('li').each(function(i){
      
      
      kidRadius = radius * .75;
      xcValue = (kidRadius * Math.cos(2 * Math.PI * i / kidsteps));
      ycValue = (kidRadius * Math.sin(2 * Math.PI * i / kidsteps));
      $(this).children('a').css('left',xcValue).css('top',ycValue);

    });
  }*/
    
  
  
  
});



$(document).bind('mousemove', awesome);

  var canMove = true;
  $('#click').click(function(){
    if(canMove){
     $(document).unbind('mousemove');
      canMove=false;
    }else{
       $(document).bind('mousemove',awesome); 
      canMove=true;
    }
    
  });
  
  $(document).bind("contextmenu",function(e){
    if(canMove){
     $(document).unbind('mousemove');
      canMove=false;
      $('.radial > ul').addClass('paused');
    }else{
       $(document).bind('mousemove',awesome); 
      canMove=true;
      $('.radial > ul').removeClass('paused');
    }
    return false;
});
  
function awesome(e){

  $('#status').html(e.pageX +', '+ e.pageY);
  $('div.radial').css('top',e.pageY).css('left',e.pageX);
}

$(document).ready(function(){
    $("#burn").click(function(){
    $("#link").attr("href", "css/fire.css");
    $("#blue").html("Demon ");
    $("#violet").html("Slayer");
    $("#audio").attr("src", "audio/fire.mp3");
    $("#img1").attr("src", "");
    $("#img2").attr("src", "css/img/1.gif");
    $("#img3").attr("src", "css/img/2.gif");
    $("#img4").attr("src", "css/img/3.gif");
    $("#img5").attr("src", "css/img/4.gif");
    $("img").css({ width: "100px" });
  });
});

$(document).ready(function(){
    $("#none").click(function(){
    $("#link").attr("href", "css/main.css");
    $("#blue").html("Multiple ");
    $("#violet").html("Styles");
    $("#audio").attr("src", "audio/silence.mp3");
    $("#img1").attr("src", "");
    $("#img2").attr("src", "");
    $("#img3").attr("src", "");
    $("#img4").attr("src", "");
    $("#img5").attr("src", "");
    $("img").css({ width: "250px" });
  });
});

$(document).ready(function(){
    $("#space").click(function(){
    $("#link").attr("href", "css/space.css");
    $("#audio").attr("src", "audio/deadman.mp3");
    $("#img1").attr("src", "css/img/astronaut.gif");
    $("#img2").attr("src", "");
    $("#img3").attr("src", "");
    $("#img4").attr("src", "");
    $("#img5").attr("src", "");
    $("#blue").html("{");
    $("#violet").html("");
    $("img").css({ width: "250px" });
  });
});

$(document).ready(function(){
    $("#avatar").click(function(){
    $("#link").attr("href", "css/avatar.css");
    $("#audio").attr("src", "audio/avatar.mp3");
    $("#img1").attr("src", "css/img/giphy.gif");
    $("#img2").attr("src", "");
    $("#img3").attr("src", "");
    $("#img4").attr("src", "");
    $("#img5").attr("src", "");
    $("#blue").html("AVATAR");
    $("#violet").html("");
    $("img").css({ width: "300px" });
  });
});

$(document).ready(function(){
    $("#8bit").click(function(){
    $("#link").attr("href", "css/8bit.css");
    $("#audio").attr("src", "audio/FirefliesBG.mp3");
    $("#blue").html("8 ");
    $("#violet").html("Bit");
    $("#img1").attr("src", "css/img/bats.gif");
    $("#img2").attr("src", "css/img/flame.gif");
    $("#img3").attr("src", "css/img/sonic.gif");
    $("#img4").attr("src", "");
    $("#img5").attr("src", "");
    $("img").css({ width: "150px" });
    });
});

$(document).ready(function(){
    $("#joker").click(function(){
    $("#link").attr("href", "css/Joker.css");
    $("#audio").attr("src", "audio/haha.mp3");
    $("#blue").html("Joker");
    $("#violet").html("");
    $("#img1").attr("src", "css/img/joker.gif");
    $("#img2").attr("src", "");
    $("#img3").attr("src", "");
    $("#img4").attr("src", "");
    $("#img5").attr("src", "");
    $("img").css({ width: "150px" });
    });
});

$(document).ready(function(){
    $("#water").click(function(){
    $("#link").attr("href", "css/water.css");
    $("#blue").html("Demon ");
    $("#violet").html("Slayer");
    $("#audio").attr("src", "audio/fire.mp3");
    $("#img1").attr("src", "");
    $("#img2").attr("src", "css/img/1.gif");
    $("#img3").attr("src", "css/img/2.gif");
    $("#img4").attr("src", "css/img/3.gif");
    $("#img5").attr("src", "css/img/4.gif");
    $("img").css({ width: "100px" });
  });
});

$(document).ready(function(){
    $("#dream").click(function(){
    $("#link").attr("href", "css/dream.css");
    $("#blue").html("Dream");
    $("#violet").html("");
    $("#audio").attr("src", "audio/letgo.mp3");
    $("#img1").attr("src", "css/img/bt23.gif");
    $("#img2").attr("src", "");
    $("#img3").attr("src", "");
    $("#img4").attr("src", "");
    $("#img5").attr("src", "");
    $("img").css({ width: "250px" });
  });
});

function right(){
        document.all.marquee1.direction = "right";
        document.all.marquee2.direction = "right";
    }

function left(){
        document.all.marquee1.direction = "left";
        document.all.marquee2.direction = "left";
    }

   var nbDrop = 800;
   
   function randRange(maxNum, minNum) {
    return (Math.floor(Math.random(10) * (maxNum - minNum + 1)) + minNum);
   }
   
   function createRain() {
    for (i = 0; i < nbDrop; i++) {
     
     var dropLeft = randRange(0, 3000);
     var dropTop = randRange(-1000, 1400);
     $('.rain').append('<div class="drop" id="drop'+ i +'"></div>');
     $('#drop' + i).css('left', dropLeft);
     $('#drop' + i).css('top', dropTop); 
    }
   }

    $("document").ready( function () {
        alert("Instruction:\n1. Click the right mouse button anywhere on the screen to show the menu.\n2. Click any button to change the theme.");
    }); 