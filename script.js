$(document).ready(() => {
    $('.open').on('click', (e) => {
        $(e.currentTarget).toggle();
        $('.close').toggle();
        $('.nav-items').css('opacity', '1');
        $('body').css('overflow', 'hidden');
    })

    $('.close').on('click', (e) => {
        $(e.currentTarget).toggle();
        $('.open').toggle();
        $('.nav-items').css('opacity', '0');
        $('body').css('overflow', 'auto');
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            $('.nav-items').css('opacity', '1');
        } else {
            $('.nav-items').css('opacity', '0');
        }
    });
});