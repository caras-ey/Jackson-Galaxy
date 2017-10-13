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
    $('.mmLinks h4').click((event) => {
        $(event.currentTarget).parent().toggleClass('open');
        $(event.currentTarget).next().slideToggle();
    });

    $('.navPages-item:nth-child(1)').mouseenter(() => {
        $('#ey-overlay').show();
    });

    $('.navPages-item').mouseleave(() => {
        $('#ey-overlay').hide();
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
    $('.solution-kickers .solution-container').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToSroll: 3,
        infinite: true,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    });
    $('.kitty-hub-subjects .subject-container').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToSroll: 3,
        infinite: true,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    });
});
