import $ from 'jquery';
$(document).ready(() => {
    $('.header-search-toggle').click((event) => {
        $(event.currentTarget).toggleClass('active');
        $('.header-search').slideToggle();
    });
    $('.navPages-close').click(() => {
        $('#menu,.mobileMenu-toggle').removeClass('is-open');
        $('body').removeClass('has-activeNavPages');
    });
    $('.footer-link-col h5').click((event) => {
        $(event.currentTarget).toggleClass('active');
        $(event.currentTarget).parent().find('ul').slideToggle();
    });

    $('.productView-thumbnails').slick({
        dots: false,
        slidesToShow: 5,
        slidesToSroll: 5,
        infinite: true,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: 'unslick',
            },
        ],
    });
});
