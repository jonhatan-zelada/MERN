//alert("it's working");
//**1.SELECTIONG ELEMENTS */

$("h1").addClass("big-title margin-50");

$(".select").text("change the subtitle");
$("h2").css("color","red");

$("#button1").html("<em>change button</em>");
//$("button").text("<em>change button</em>");//other way but only text


$("img").attr("scr", "images/tom3.png");


$("a").attr("href","https://www.linguee.es/");




//** using functions */
$("h1").click(function () { 
    $("h1").css("color","purple");
    
});


//way1 to change values with vanilla jscript
    /* for (var i= 0; i < 5; i++) {
        document.querySelectorAll("button")[i].addEventListener("click", function(){
            document.querySelector("h2").style.color="green";
        });
        
    } */

    //way2 to change values with JQuery
    $("#button1").click(function () { 
        $("h2").css("color","green");
    });




// Update the h1 base on the key i press in the body of the documento
$("body").keypress(function (event) { 
    $("h1").text(event.key);
    });


//**EVENTS */
//with any event from https://api.jquery.com/category/events/

/* 
$("h3").on("click", function () {
    $("h3").css("color","yelow");
}); */

$("h3").on("mouseover",function () { 
    $("h3").css("color","green");
});



//** 2. ADDING AND REMOVING elements*/
$("#button2").click(function () { 
    $("#button2").before("<button>New button</button>");
});

$("#button3").click(function () { 
    $("#button3").after("<input type='after'>");
    
});

$("#button4").click(function () { 
    $("#prep1").prepend("<button>New button</button>");
    
});

$("#button5").click(function () { 
    $("#prep1").append("<button>New button</button>");
    
});

//** 3.ANIMATION */
$("#animation1").click(function () { 
    $("#anim").hide();
});

$("#animation2").click(function () { 
    $("#anim").show();
});

$("#animation3").click(function () { 
    $("#anim").fadeOut();
});

$("#animation4").click(function () { 
    $("#anim").fadeIn();
});

$("#animation5").click(function () { 
    $("#anim2").slideUp();
});

$("#animation6").click(function () { 
    $("#anim2").slideDown();
});
//animate only uses numeric values
$("#animation7").click(function () { 
    $("#anim2").animate({opacity:0.5});
});

$("#animation8").click(function () { 
    $("#anim2").animate({margin:"20%"});
});

$("#animation9").click(function () { 
    $("#anim2").fadeIn().animate({margin:'100px'});
});
