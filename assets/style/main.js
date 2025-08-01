$(document).ready(function () {
   let textArray = ['Web Developer','UI/UX Developer','App Developer'];
   let textArrayLen = textArray.length;
   let h1 = $('#ban')
   let t_index = 0;
   console.log(textArray[t_index]);
   setInterval(()=>{
      if(t_index<textArrayLen){
         let textData = textArray[t_index];
         $(h1).text(textData); 
      }
   },1000);
});