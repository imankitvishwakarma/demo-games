// remove bar to click a
$(document).ready(function(){
    $(".nav-btn-side ul li a").click(function(){
      $("div#navbarSupportedContent").removeClass("show");
    });
});
// <!-- typewriter start -->
var i = 0;
var txt = 'We create fun Games to entertain the World';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
// <!-- typewriter end -->
// scroll on counter start
  var a = 0;
$(window).scroll(function() {

var oTop = $('#counter').offset().top - window.innerHeight;
if (a == 0 && $(window).scrollTop() > oTop) {
$('.counter-value').each(function() {
var $this = $(this),
  countTo = $this.attr('data-count');
$({
  countNum: $this.text()
}).animate({
    countNum: countTo
  },

  {

    duration: 2000,
    easing: 'swing',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });
});
a = 1;
}

});
// scroll on counter end
