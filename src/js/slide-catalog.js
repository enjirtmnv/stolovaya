document.addEventListener("DOMContentLoaded", function(event) {
    event.preventDefault();

    let catalog = document.querySelector('.slide-catalog');
    let categoriesItemLink = document.querySelector('.categories__refrigeration-link');

    let shadowMain = document.querySelector('.shadow-main');
    let shadowFooter = document.querySelector('.shadow-footer');

    categoriesItemLink.addEventListener('click', function () {

        if(catalog.classList.contains('show')){
            //чтобы блок исчез
            catalog.classList.add('visuallyhidden');
            catalog.addEventListener('transitionend', function (e) {
                catalog.classList.remove('show');
            }, {
                capture: false,
                once: true,
                passive: false

            });

            shadowMain.classList.add('visuallyhidden');
            shadowMain.addEventListener('transitionend', function (e) {
                shadowMain.classList.remove('show');
            }, {
                capture: false,
                once: true,
                passive: false
            });

            shadowFooter.classList.add('visuallyhidden');
            shadowFooter.addEventListener('transitionend', function (e) {
                shadowFooter.classList.remove('show');
            }, {
                capture: false,
                once: true,
                passive: false
            });
        } else {

            //чтобы блок появился
            catalog.classList.add('visuallyhidden');
            catalog.classList.add('show');
            setTimeout(function () {
                catalog.classList.remove('visuallyhidden');
            }, 20);

            shadowMain.classList.add('visuallyhidden');
            shadowMain.classList.add('show');
            setTimeout(function () {
                shadowMain.classList.remove('visuallyhidden');
            }, 20);

            shadowFooter.classList.add('visuallyhidden');
            shadowFooter.classList.add('show');
            setTimeout(function () {
                shadowFooter.classList.remove('visuallyhidden');
            }, 20);
        }

    });




    let main = document.querySelector('.main');
    let footer = document.querySelector('.footer');

    main.addEventListener('click', function () {

        if(catalog.classList.contains('show')){
            //чтобы блок исчез
            catalog.classList.add('visuallyhidden');
            catalog.addEventListener('transitionend', function (e) {
                catalog.classList.remove('show');
            }, {
                capture: false,
                once: true,
                passive: false

            });

            shadowMain.classList.add('visuallyhidden');
            shadowMain.addEventListener('transitionend', function (e) {
                shadowMain.classList.remove('show');
            }, {
                capture: false,
                once: true,
                passive: false
            });

            shadowFooter.classList.add('visuallyhidden');
            shadowFooter.addEventListener('transitionend', function (e) {
                shadowFooter.classList.remove('show');
            }, {
                capture: false,
                once: true,
                passive: false
            });
        }
    });

    footer.addEventListener('click', function () {

        if(catalog.classList.contains('show')){
            //чтобы блок исчез
            catalog.classList.add('visuallyhidden');
            catalog.addEventListener('transitionend', function (e) {
                catalog.classList.remove('show');
            }, {
                capture: false,
                once: true,
                passive: false

            });

            shadowMain.classList.add('visuallyhidden');
            shadowMain.addEventListener('transitionend', function (e) {
                shadowMain.classList.remove('show');
            }, {
                capture: false,
                once: true,
                passive: false
            });

            shadowFooter.classList.add('visuallyhidden');
            shadowFooter.addEventListener('transitionend', function (e) {
                shadowFooter.classList.remove('show');
            }, {
                capture: false,
                once: true,
                passive: false
            });
        }
    })

});