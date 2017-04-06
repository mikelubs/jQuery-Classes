

 $(document).ready(function() {
        $(".clickable1").click(function() {
          $("img").slideDown();
          $("#walrus-showing").fadeToggle();
          $("#walrus-hidden").slideToggle();
        });

        $(".clickable2").click(function() {
          $("img").slideUp();
          $("#walrus-showing").fadeToggle();
          $("#walrus-hidden").slideToggle();

        });

      });
