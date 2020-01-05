(function($) {
  "use strict"; // Start of use strict

  // Show the navbar when the page is scrolled up
  var MQL = 992;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
          } else {
            $('#mainNav').removeClass('is-visible is-fixed');
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#mainNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }

  /****** Blog Posts Carousel ******/
  var num_pages = Object.keys(carousel_items_home).length / 4;
  if( Object.keys(carousel_items_home).length % 4 != 0 ){
    num_pages = num_pages + 1;
  }

  // Add the pages
  for(var i = 0; i < num_pages; i++) {
    $("#blogCarouselIndicators .carousel-inner").append(
      `
      <div class="carousel-item ${i == 0? 'active': ''}">
        <div class="row justify-content-center" id="row-${i}">
        </div>
      </div>
      `
    )

    $("#blogCarouselIndicators .carousel-indicators").append(
      `
      <li data-target="#blogCarouselIndicators" data-slide-to="${i}" class="custom-li ${i == 0? 'active': ''}"></li>
      `
    )
    
    // Add the slides (4 per page)
    for(var j = i * 4; j < (i * 4) + 4; j++) {

      $(`#blogCarouselIndicators .carousel-inner #row-${i}`).append(
        `
        <div class="col-md-3">
          <div class="card mb-2">
            <img src=${carousel_items_home[j].img} 
            class="card-img-top">
            <div class="card-body">
              <h6 class="card-subtitle mb-10 text-muted">${carousel_items_home[j].cost} </h6>
              <p class="card-text">${carousel_items_home[j].description}</p>
            </div>
            <a href=${carousel_items_home[j].url} class="stretched-link"></a>
          </div>
        </div>
        `
      )

    }
  }
  /****** Blog Posts Carousel ******/

  /****** Wardrobe Carousel ******/
  num_pages = Object.keys(wardrobe).length / 6;
  if( Object.keys(wardrobe).length % 6 != 0 ){
    num_pages = num_pages + 1;
  }

  console.log(num_pages)

  // Add the pages
  for(var i = 0; i < num_pages; i++) {
    $("#wardrobeCarouselIndicators .carousel-inner").append(
      `
      <div class="carousel-item ${i == 0? 'active': ''}">
        <div class="row justify-content-center" id="row-${i}">
        </div>
      </div>
      `
    )

    $("#wardrobeCarouselIndicators .carousel-indicators").append(
      `
      <li data-target="#wardrobeCarouselIndicators" data-slide-to="${i}" class="custom-li ${i == 0? 'active': ''}"></li>
      `
    )
    
    // Add the slides (6 per page)
    for(var j = i * 6; j < (i * 6) + 6; j++) {

      $(`#wardrobeCarouselIndicators .carousel-inner #row-${i}`).append(
        `
        <div class="col-md-2">
          <div class="card mb-2">
            <img src=${wardrobe[j].img} 
            class="card-img-top">
            <a href=${wardrobe[j].url} class="stretched-link"></a>
          </div>
        </div>
        `
      )

    }
  }
  /****** Wardrobe Carousel ******/


})(jQuery); // End of use strict
