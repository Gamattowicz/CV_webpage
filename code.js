$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();

    const $edu = $('.edu');
    const eduTop = $edu.offset().top;
    const eduHeight = $edu.outerHeight();

    const $skill = $('.skill');
    const skillTop = $skill.offset().top;
    const skillHeight = $skill.outerHeight();


    const $exp = $('.exp');
    const expTop = $exp.offset().top;
    const expHeight = $exp.outerHeight();

    if (scrollValue > eduTop + eduHeight - windowHeight) {
        $edu.addClass('active');
    }

    if (scrollValue > skillTop + skillHeight - windowHeight) {
        $skill.addClass('active');
    }

    if (scrollValue > expTop + expHeight - windowHeight) {
        $exp.addClass('active');
    }

    if (scrollValue < 200) {
        $('section').removeClass('active');
    }



})