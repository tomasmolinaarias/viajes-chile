/*desaparecer carta*/

$(document).ready(function(){
    $(".tarjetas").click(function(){
      $(this).toggle("hide");
    });
});

  /* cambiar color de bg */

  $(document).ready(function(){
    $("#avion").click(function(){
      $(this).css("background-color","red");
    });
  });

  $(document).ready(function(){
    $("#montaña").click(function(){
      $(this).css("background-color","red");
    });
  });

  $(document).ready(function(){
    $("#ruta").click(function(){
      $(this).css("background-color","red");
    });
  });

  /*tooltip */
  
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})