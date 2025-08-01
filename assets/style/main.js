$(document).ready(function () {
   let contentArray = ['Web Developer','UI/UX Developer','App Developer'];
   let contentArrayLen = contentArray.length;
   let h1 = $("#ban-h");
    let index = 0;
   function displayContent(){
      if(index<contentArrayLen){
         console.log( );
         $(h1).text(contentArray[index]);
      }
         index++;
   
   }
   displayContent();
   setInterval(()=>{
      displayContent();
   },2000)
});