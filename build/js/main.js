$(document).foundation();
$(document).ready(function(){
  $('nav ul a').bind('click',function(event){
      console.log('testing');
      var $anchor = $(this);

      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1000,'easeInOutExpo');
      /*
      if you don't want to use the easing effects:
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1000);
      */
      event.preventDefault();
  });

});
