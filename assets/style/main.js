$(document).ready(function (e) {
  $('.contact-container').hover(function () {
    var element = $('.contact-con-h');
    element.removeClass('slider'); // remove first
    void element[0].offsetWidth;   // trigger reflow
    element.addClass('slider');    // then add again
  }, function () {
    $('.contact-con-h').removeClass('slider');
  });
  let mainSpan = document.querySelectorAll(".main-intro");
  const introArray = Array('Web Developer','UIUX Designer','App Developer');
    let index=0;
  function displayContent(){
  
    if(index<introArray.length){
      let h1 = document.createElement('h1');
      let subDiv = $('.banner-intro-con').children('.main-head');
    
  
      let data=introArray[index].split('');
      console.log(data);
    function appendData(){
        let span = document.createElement('span');
        var j =0;
        if(j<data.length){
           span.innerText = data[j];
             $(h1).html(span);
                 $(subDiv).html(h1);
        }
        setTimeout(()=>{
          appendData();
        },1000)
    }
      setTimeout(()=>{
        displayContent();
      },2000);
      index=(index+1)%introArray.length;
    }
    appendData();
  }
  displayContent();

});
