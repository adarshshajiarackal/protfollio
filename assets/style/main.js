$(document).ready(function () {
    let skillSetText = "Web Developer";
    let textArray = skillSetText.split('');
    let index=0;
    function displayText(){
      if(index<skillSetText.length){
                 $('.main-head-content').append(skillSetText[index]);
             index+=1;
      }
        else{
        iconBackWard();

        }
    }
    function iconBackWard(){
       $('.animation-bar ').css({
         "position":"absolute",
      
            "width":"60%",
            "height":"54px",
            " background-image":"linear-gradient(360deg,black,white)"
       }).animate({
        left:"20%"
       },1000,"swing")
    }
    displayText();
    setInterval(()=>{
      displayText();
    },200);
    console.log(index);
});