(function ($) {
    function toggleMenu() {
        $('.toggle-menu').on('click',function () {
            $('.menu-tab').toggleClass('tf-0');
        });
    }

  $(document).ready(function () {
        toggleMenu();

    });

})(jQuery);
