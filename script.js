$(".mini-slider").slick({

    // normal options...
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    // loop: true,
    nextArrow: '<img src="pict01/right.png">',
    prevArrow: '<img src="pict01/left.png">',
 
  
    // the magic
    responsive: [{
  
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          infinite: true
        }
  
      },{
  
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
  
      }, {
  
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
  
      },{
  
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true
        }
  
      }, {
  
        breakpoint: 300,
        settings: "unslick" // destroys slick
  
      }]
  });



  $(".big-slider").slick({

    // normal options...
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // loop: true,
    nextArrow: '<img src="pict01/right.png">',
    prevArrow: '<img src="pict01/left.png">',
  
  });


  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}