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

var button = $("#lead-banner a");

button[0].onclick = function(){
    $("#points-of-sale").toggleClass("open")
    return false;
}

// var myLis = $("#points-of-sale li")

// myLis.on("click", function(){
//     $(this).css({"background": "red"})

//     myLis.off("click")
// })

$("#lead-banner").dblclick(function(){
    alert("you double clicked")
    $("#lead-banner").off("dblclick")
})