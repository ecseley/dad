(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    
    $(document).ready(function() {
      // background pic entrance
      setTimeout(function() {
        $('#dad-pic').animate({opacity: 0.4}, {duration: 4500});
      }, 5000);

      // intro text
      setTimeout(function() {
        $('.intro').animate({opacity:0}, {duration: 4500});
        $('#dad-pic').animate({opacity: 0.2}, {duration: 4500});
      }, 10000);

      // fade intro into main content
      setTimeout(function() {
        $('.intro').css('display','none');
        $('.nav').css('display','block').hide().fadeIn();
      }, 16000);
      
      //menu
      $('.fa-paper-plane-o').click(function() {
        $('#form').slideToggle().css('display','flex');
        $(this).toggleClass('active');
      });

      $('.fa-info').click(function() {
        $('.info').slideToggle();
        $(this).toggleClass('active');
      });
    });
  });

})(jQuery, window, document);
