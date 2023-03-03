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
        }})
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
        }})
    
    //
});
