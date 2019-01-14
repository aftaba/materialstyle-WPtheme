window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
$(".heart-custom").click(function(){
  $(this).toggleClass("remove-border-heart");
});

setTimeout(function() {
  $('.hided-alert').fadeOut('slow');
}, 1000); // <-- time in milliseconds

$(".heart-custom").click(function(){
  $('.hided-alert').fadeIn('slow', function(){
     $('.hided-alert').delay(1000).fadeOut(); 
  });
});