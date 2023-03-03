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
    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow:true,
        nextArrow: $('.next'),
        prevArrow: $('.prev')
      });
});