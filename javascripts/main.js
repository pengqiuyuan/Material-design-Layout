/*
# =============================================================================
#   Sparkline Linechart JS
# =============================================================================
*/


(function() {

  $(document).ready(function() {
    /*
    # =============================================================================
    #   Navbar scroll animation
    # =============================================================================
    */

    $(".navbar.scroll-hide").mouseover(function() {
      $(".navbar.scroll-hide").removeClass("closed");
      return setTimeout((function() {
        return $(".navbar.scroll-hide").css({
          overflow: "visible"
        });
      }), 150);
    });
    $(function() {
      var delta, lastScrollTop;
      lastScrollTop = 0;
      delta = 50;
      return $(window).scroll(function(event) {
        var st;
        st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) {
          return;
        }
        if (st > lastScrollTop) {
          $('.navbar.scroll-hide').addClass("closed");
        } else {
          $('.navbar.scroll-hide').removeClass("closed");
        }
        return lastScrollTop = st;
      });
    });
    /*
    # =============================================================================
    #   Mobile Nav
    # =============================================================================
    */

    $('.navbar-toggle').click(function() {
       var p_class = $("body, html").attr("class");
        if(p_class=="nav-open-right"){
            $("body, html").toggleClass("nav-open-right");
        }
       $('body, html').toggleClass("nav-open");
    });

    $('.navbar .container-fluid.top-bar .logo').click(function() {
        var p_class = $("body, html").attr("class");
        if(p_class=="nav-open"){
            $("body, html").toggleClass("nav-open");
        }
        $('body, html').toggleClass("nav-open-right");
    });


      /*
       # =============================================================================
       #   Isotope with Masonry
       # =============================================================================
       */
      var $container2;
      $alpha = $('#hidden-items');
      $container2 = $('#social-container');
      $(window).load(function() {
          /*
           # init isotope, then insert all items from hidden alpha
           */

          $container2.isotope({
              itemSelector: '.item'
          }).isotope('insert', $alpha.find('.item'));
          return $("#load-more").html("Load more").find("i").hide();
      });
      $('#load-more').click(function() {
          var item1, item2, item3, items, tmp;
          items = $container2.find('.social-entry');
          item1 = $(items[Math.floor(Math.random() * items.length)]).clone();
          item2 = $(items[Math.floor(Math.random() * items.length)]).clone();
          item3 = $(items[Math.floor(Math.random() * items.length)]).clone();
          tmp = $().add(item1).add(item2).add(item3);
          return $container2.isotope('insert', tmp);
      });

  });

}).call(this);
