// $("#lead-banner p");

// $("h3").css({border: "3px solid blue"})

// $(".wrapper").css({border: "1px solid red"})

// $("#clients").css({border: "3px solid yellow"})

// $("#contact ul:first-child").css({border: "3px solid red"})
// $("#contact ul:last-child").css({border: "3px solid red"})

// $("header nav li:odd").css({border: "3px solid orange"})

// $("section:not('#contact')").css({border: "3px solid blue"})

// $("#social-nav li:gt(2)").css({border: "3px solid purple"})

// $("img[alt]").css({border: "3px solid pink"})

// $("img[alt=quote]").css({border: "3px solid yellow"})

// $("#contact-methods").next().css({border: "3px solid red"})

// $("#social-nav").prev().css({border: "3px solid blue"})

// $(".banner-title").parents().css({border: "3px solid pink"})

// $("#social-nav").children().css({border: "3px solid green"})

// $("#contact").find(".facebook").css({border: "3px solid purple"})

// $("#social-nav").closest(".wrapper").css({border: "3px solid orange"})

// $("#contact-methods").css({border: "3px solid red"})
// .next().css({border: "3px solid green"})
// .closest("section").css({border: "3px solid purple"})

// var tweet = "The big fight live: Ham vs Cheese!";

// $('#tweets div').text(tweet)

// $("section").wrap("<div>");
// $("section").unwrap();
// $("section").wrapAll("<div>");

// var wrapper = "<div class='wrapper'>";
// var button = $(".button");
// var wrapped = true;

// button[0].onclick = function() {
//   if (wrapped) {
//     $("section").unwrap();
//     wrapped = false;
//     button.text("wrap");
//   } else {
//     $("section").wrapAll(wrapper);
//     wrapped = true;
//     button.text("unwrap");
//   }
// };

// $(".button").remove();
// $("#points-of-sale").empty();
// $("#contact img").remove()

// $("#contact img").removeAttr("alt")
// console.log($("#contact img").attr("alt"))

// $("#social-nav").css({
//     "top": "-400px",
//     "left": "150px",
//     "opacity": "0.5",
//     "border-top": "4px solid red"
// })

// $("header .wrapper").removeClass("wrapper")
// $("header > div").addClass("wrapper ")

// $(function(){
// $("*").on("click", function(e){
//     console.log(e.target);
//     console.log("The event is " + e.type);
//     console.log("X coordinate of the event is " + e.pageX)
//     console.log("Y coordinate of the event is " + e.pageY)
//     e.stopPropagation();
// })

// })

$(document).ready(function(){

    $(".slide-button-up").on("click", function(){
        $("#lead-banner").slideUp(3000)

    })

    $(".slide-button-down").on("click", function(){
        $("#lead-banner").slideDown(100, () => alert("The animation has ended."))

    })

    $(".slide-button-downorup").on("click", function(){
        $("#lead-banner").slideToggle(1000, () => alert("toggle animation complete"))

    })
})