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
        $('#mainContent').css('display','block').hide().fadeIn();
      }, 16000);
      
      //menu
      $('.fa-info').click(function() {
        $('#form').slideToggle().css('display','flex');
      });
    });
  });

})(jQuery, window, document);