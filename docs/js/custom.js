// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

$('#blog').onclick = function () {
    location.href = "https://www.aneejian.com";
};  

$(function() {
    new WOW().init();
    $('.templatemo-nav').singlePageNav({
    	offset: 70
    });

    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
})

function changePage(event) {
    if($(event.target).hasClass('external')) {
        window.location.href = $(event.target).attr('href');
        return;
    }
    //...
}
$(function () {
    $('.nav li').click(changePage);
})  