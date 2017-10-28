 $('.sl').slick({
     autoplay: true,
     autoplaySpeed: 3000,
     speed: 300,
     cssEase: 'ease-in',
     slidesToShow: 5,
    
     
     
     //разрешение
     responsive: [
    {
      breakpoint: 900,
      settings: {
        arrows: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
         
    {
      breakpoint: 600,
      settings: {
        arrows: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },     
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
     
     
 });