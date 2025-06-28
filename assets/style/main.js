$(document).ready(function () {
  $('.contact-container').hover(function () {
    var element = $('.contact-con-h');
    element.removeClass('slider'); // remove first
    void element[0].offsetWidth;   // trigger reflow
    element.addClass('slider');    // then add again
  }, function () {
    $('.contact-con-h').removeClass('slider');
  });
});
c