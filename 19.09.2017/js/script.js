$(document).ready(function(){

  $("#dropdownMenuLink").mouseover(function(){
   $(".dropdown-menu").addClass("showClass");
  })
  $("#dropdownMenuLink").mouseout(function(){
    $(".dropdown-menu").removeClass("showClass");
   })
  

})