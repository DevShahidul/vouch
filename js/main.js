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
        var horizontalSlider = $('#horizontal-slider');
        var horizontalSliderThumb = $('#slider-thumb');
        
        horizontalSlider.on('afterChange init', function (event, slick, currentSlide, nextSlide){
            
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
        
        // Horizontal Slider on before function
        horizontalSlider.on('beforeChange', function(event, slick) {
            // optional, but cleaner maybe
            // remove all prev/next
            slick.$slides.removeClass('prevdiv').removeClass('nextdiv');
        })
        
        // Horizontal Slider function
        horizontalSlider.slick({
            infinite: true,
            prevArrow: $('#slide-prev'),
            nextArrow: $('#slide-next'),
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
                return '<button class="tab">' + $('#slider-thumb .thumb-item:nth-child(' + (i + 1) + ')').html() + '</button>';
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
        $("#slider-img-prev").on("click", function(){
            horizontalSlider.slick('slickPrev');
        });
        
        // Horizontal Slider next controller
        $("#slider-img-next").on("click", function(){
            horizontalSlider.slick('slickNext');
        });
        

    });
})(jQuery);