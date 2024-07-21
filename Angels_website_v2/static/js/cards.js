var carouselWidth = $(".games .carousel-inner")[0].scrollWidth;
var cardWidth = $(".games .carousel-item").width();

var scrollPosition = 0;

$(".games .carousel-control-next").on("click", function () {
    if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
      scrollPosition += cardWidth;  //update scroll position
      $(".games .carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
    }
  });

  $(".games .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $(".games .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });