/*desaparecer carta*/

$(document).ready(function(){
    $(".tarjetas").click(function(){
      $(this).toggle("hide");
    });
    $("#avion").click(function(){
        $(this).css("background-color","red");
        
      });
      $("#montaña").click(function(){
        $(this).css("background-color","red");
      });
      $("#ruta").click(function(){
        $(this).css("background-color","red");
      });
});

  /*tooltip */

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})