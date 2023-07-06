$(document).ready(function(){

    $('.first-screen-slider').slick({
        dots: true,
        infinite: true,
        appendArrows: '.first-screen-slider__arrows',
        responsive: [{
            breakpoint: 991,
            settings: {
              arrows:false,
            }
          },
        ]
    });

  });  

  const checkbox = document.querySelectorAll('[type="checkbox]')
  console.log(checkbox);