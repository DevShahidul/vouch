(function ($) {
    $(function () {
        
        // Masonary grid gallery
        $('.grid').masonry({
            // options...
            columnWidth: '.grid-sizer',
            itemSelector: '.grid-item',
            percentPosition: true
        });
        
        // Magnific popup
        if($('.grid-item').length){
          $('.grid-item').magnificPopup({
                type:'image',
                gallery: {
                  enabled: true
                },
          });
        }
        
        // Horizontal Slider wrapper
        var horizontalSlider = $('.horizontal-slider');
        //var horizontalSliderThumb = $('.slider-thumb');

        $('.horizontal-slider').each(function(key, item) {

          var sliderIdName = 'slider' + key;
          //var sliderNavIdName = 'sliderNav' + key;

          var sliderPrevIdName = 'sliderPrev' + key;
          var sliderNextIdName = 'sliderNext' + key;
          
          var sliderControllerNextIdName = 'sliderControllerPrev' + key;
          var sliderControllerPrevIdName = 'sliderControllerNext' + key;

          this.id = sliderIdName; // sider id

          $('.slide-prev')[key].id = sliderPrevIdName; // Add number slider nav perv id
          $('.slide-next')[key].id = sliderNextIdName; // Add number slider nav next id
          
          
          $('.img-controller.prev')[key].id = sliderControllerPrevIdName; // Add number slider controller prev id
          $('.img-controller.next')[key].id = sliderControllerNextIdName; // Add number slider controller next id



          var sliderId = '#' + sliderIdName; // add slider id
          
          var sliderPrevId = '#' + sliderPrevIdName; //Add id sldier prev name id
          var sliderNextId = '#' + sliderNextIdName; //Add id slider next name id

          var sliderControllerPrevId = '#' + sliderControllerPrevIdName; //Add id sldier controller prev name id
          var sliderControllerNextId = '#' + sliderControllerNextIdName; //Add id slider controller next name id

              $(sliderId).on('afterChange init', function (event, slick, currentSlide, nextSlide){
            
                slick.$slides.removeClass('prevdiv').removeClass('nextdiv');

                // find current slide 
                for (var i = 0; i < slick.$slides.length; i++)
                {
                    var $slide = $(slick.$slides[i]);
                    if ($slide.hasClass('slick-current')) {
                        // update DOM siblings
                        $slide.prev().addClass('prevdiv');
                        $slide.next().addClass('nextdiv');
                        break;
                    }
                }
                
            });

          $(sliderId).slick({
                infinite: true,
                prevArrow: $(sliderPrevId),
                nextArrow: $(sliderNextId),
                dots: true,
                autoplay: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnHover: true,
                centerMode: true,
                centerPadding: '160px',
                //asNavFor: horizontalSliderThumb,
                arrows: true,
                customPaging: function (slider, i) {
                    return '<button class="tab">' + $('.slider-thumb .thumb-item:nth-child(' + (i + 1) + ')').html() + '</button>';
                },
                responsive: [{ 
                    breakpoint: 500,
                    settings: {
                        dots: false,
                        centerPadding: '0px'
                    } 
                }]
          });

            // Horizontal Slider prev controller
            $(sliderControllerPrevId).on("click", function(){
                $(sliderPrevId).click();
            });
            
            // Horizontal Slider next controller
            $(sliderControllerNextId).on("click", function(){
                $(sliderNextId).click();
            });


        });

        // horizontalSlider.each(function(){
        //     horizontalSlider.on('afterChange init', function (event, slick, currentSlide, nextSlide){
            
        //         slick.$slides.removeClass('prevdiv').removeClass('nextdiv');

        //         // find current slide 
        //         for (var i = 0; i < slick.$slides.length; i++)
        //         {
        //             var $slide = $(slick.$slides[i]);
        //             if ($slide.hasClass('slick-current')) {
        //                 // update DOM siblings
        //                 $slide.prev().addClass('prevdiv');
        //                 $slide.next().addClass('nextdiv');
        //                 break;
        //             }
        //         }
                
        //     });
            
        //     // Horizontal Slider on before function
        //     horizontalSlider.on('beforeChange', function(event, slick) {
        //         // optional, but cleaner maybe
        //         // remove all prev/next
        //         slick.$slides.removeClass('prevdiv').removeClass('nextdiv');
        //     })
            
        //     // Horizontal Slider function
        //     horizontalSlider.slick({
        //         infinite: true,
        //         prevArrow: $('.slide-prev'),
        //         nextArrow: $('.slide-next'),
        //         dots: true,
        //         autoplay: true,
        //         speed: 800,
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         pauseOnHover: true,
        //         centerMode: true,
        //         centerPadding: '160px',
        //         //asNavFor: horizontalSliderThumb,
        //         arrows: true,
        //         customPaging: function (slider, i) {
        //             return '<button class="tab">' + $('.slider-thumb .thumb-item:nth-child(' + (i + 1) + ')').html() + '</button>';
        //         },
        //         responsive: [{ 
        //             breakpoint: 500,
        //             settings: {
        //                 dots: false,
        //                 centerPadding: '0px'
        //             } 
        //         }]
        //     });
            
        //     // Horizontal Slider prev controller
        //     $(".img-controller.prev").on("click", function(){
        //         $(this).slick('slickPrev');
        //     });
            
        //     // Horizontal Slider next controller
        //     $(".img-controller.next").on("click", function(){
        //         $(this).slick('slickNext');
        //     });
        // })
        

    });
})(jQuery);