$(document).ready(function(){
  // add scrollspy to <body>
  offsetValue = 50;
  $('body').scrollspy({target: ".navbar", offset: offsetValue});

  // add smooth scrolling to navbar
  $("#myNavbar a").on('click', function(event) {
    if (this.hash !== "") {
      // prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var scrollToPosition = $(hash).offset().top;
      if(hash=="#home"){
        scrollToPosition = 0;
      }

      // using jQuery's animate()
      $('html, body').animate({
        scrollTop: scrollToPosition
      }, 800, function(){

        // // add hash (#) to URL
        // window.location.hash = hash;
      });
    } 
  });
});
