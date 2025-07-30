$(document).ready(function (e) {
  $('.contact-container').hover(function () {
    var element = $('.contact-con-h');
    element.removeClass('slider'); // remove first
    void element[0].offsetWidth;   // trigger reflow
    element.addClass('slider');    // then add again
  }, function () {
    $('.contact-con-h').removeClass('slider');
  });
  let mainSpan = document.querySelectorAll(".main-head");
  const introArray = Array('Web Developer','UIUX Designer','App Developer');
  let i = 0;
function displayContent() {
  const mainSpan = $('.main-head'); // Use your target container
    const heading = $('<h1></h1>').html(introArray[i]+"<span class='animation-bar'></span>");
    mainSpan.html(heading);
    animationBar();

    i = (i + 1) % introArray.length; // Loop index

}
setInterval(displayContent,4000);
  function animationBar(){
      $('.animation-bar').animate({
    width:"50%"
  },4000,"swing",function(){
    $(this).css({
      "left":"70%",
      "width":"5px",
    });
    setTimeout(()=>{
      $('.animation-bar').animate({
        left:"25%",

      },4000);
    })

  })
  }
});
