$('.search-button').on('click', '.search-toggle', function(e) {
    var selector = $(this).data('selector');
  
    $(selector).toggleClass('show').find('.search-input').focus();
    $(this).toggleClass('active');
  
    e.preventDefault();
  });


  // change background color 
  $(document).scroll(function () {
    $(".go-to-top").toggleClass("show",$(this).scrollTop() > 200)
  });


// ------------------blog.index-------------
$('.related-section-content').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  infinite: true,
  // speed: 600,
  // autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});