/*desaparecer carta*/

$(document).ready(function(){
       //desaparecer quienes somos
    $(".quienes_somos").dblclick(function(){
      $(this).toggle("hide");
       //cambio decolor  quienes somos 
    });
    $("#avion").click(function(){
        $(this).css("background-color","red");
        
      });
      $("#montaña").click(function(){
        $(this).css("background-color","purple");
      });
      $("#ruta").click(function(){
        $(this).css("background-color","pink");
      });
      $(".parrafo_QS1").click(function(){
        $(this).css("color","red");
      });
      $(".parrafo_QS2").click(function(){
        $(this).css("color","purple");
      });
      $(".parrafo_QS3").click(function(){
        $(this).css("color","pink");
      });
        //cambio de color tarjetas   
      $(".tarjeta1").click(function(){
        $(this).css("background-color","brown");
        });
        $(".tarjeta2").click(function(){
          $(this).css("background-color","pink");
      });
      $(".tarjeta3").click(function(){
          $(this).css("background-color","orange");
      });
      $(".tarjeta4").click(function(){
          $(this).css("background-color","red");
      });
        //con doble click vuelve ala normalida
      $(".tarjeta1").dblclick(function(){
          $(this).css("background-color","turquoise");
      });
      $(".tarjeta2").dblclick(function(){
          $(this).css("background-color","turquoise");
      });
      $(".tarjeta3").dblclick(function(){
          $(this).css("background-color","turquoise");
      });
      $(".tarjeta4").dblclick(function(){
          $(this).css("background-color","turquoise");
      });
        //popover
      var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
      })

      //tooltip
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
      })
});

  /*tooltip */

//var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//  return new bootstrap.Tooltip(tooltipTriggerEl)
//})