
// Js Documents
// Tabla de contenidos

jQuery(document).ready(function ($) {
    "user strict";

    initIsotopeFiltering();
    initIsotopeRedFilter();
    

    // 5.  Filtrado de isótopos product

    function initIsotopeFiltering() {
        if ($('.grid_sorting_button').length) {
            $('.grid_sorting_button').click(function () {
                $('.grid_sorting_button.active').removeClass('active');
                $(this).addClass('active');

                var selector = $(this).attr('data-filter');
                $('.product-grid').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });

                return false;
            });

        }
    }


    function initIsotopeRedFilter() {
        if ($('.grid_sorting_button').length) {
            $('.grid_sorting_button').click(function () {
                $('.grid_sorting_button.active').removeClass('active');
                $(this).addClass('active');

                var selector = $(this).attr('data-filter');
                $('.product-grid').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });

                return false;
            });

        }
    }

})
