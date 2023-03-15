$('document').ready(function(){
    $('#catalogButton').click(function(){
        $(this).toggleClass('blue')
        $('#catalog').slideToggle('slow')
    });
    $('.category-item').hover(function(){
        $(this).toggleClass('pink')
        $(this).find('p').css('color', 'white')
    },function(){
        $(this).toggleClass('pink')
        $(this).find('p').css('color', '#090F24')
    });

    $('.slider-watched').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow:true,
        nextArrow: $('.next-watched'),
        prevArrow: $('.prev-watched')
    });
    $('.slider-promotion').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow:true,
        nextArrow: $('.next-promotion'),
        prevArrow: $('.prev-promotion')
    });
    /*слайдер на странице товара*/
    $('.product-page__slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-page__slider-nav'
   });
   $('.product-page__slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product-page__slider-for',
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        prevArrow: $('.product-page__slider-arrow-prev'),
        nextArrow: $('.product-page__slider-arrow-next')
   });
    
    
    //рейтинговая система товаров
    $('.rating label').click(function(){
        var estimation=$(this).attr("estimation"); //хранит в себе оценку (можно и с сервера передать)
        var ratingStarsArr=$(this).parent().find("label");
        console.log(ratingStarsArr);
        for (var i = 0; i < ratingStarsArr.length; i++) {
            if (i<=estimation-1) {
                ratingStarsArr[i].style.color="gold";
            }
            else{
                ratingStarsArr[i].style.color="lightgrey";
            }
        }
    })
    $('.rating label').hover(function(){
        var estimation=$(this).attr("estimation"); //хранит в себе оценку (можно и с сервера передать)
        var ratingStarsArr=$(this).parent().find("label");
        for (var i = 0; i < ratingStarsArr.length; i++) {
            if (i<=estimation-1) {
                ratingStarsArr[i].style.color="gold";
            }
            else{
                ratingStarsArr[i].style.color="lightgrey";
            }
        }
    })
    
});
