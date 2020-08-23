document.addEventListener("DOMContentLoaded", function(event) {
    event.preventDefault();

    let suggestionsButtonPlus = document.querySelector('.suggestions__button-plus');
    let suggestionsButtonMinus = document.querySelector('.suggestions__button-minus');
    let suggestionsMore = document.querySelector('.suggestions-more');

    suggestionsButtonPlus.addEventListener('click', function () {

        suggestionsMore.style.maxHeight = suggestionsMore.scrollHeight + "px";

        suggestionsButtonPlus.style.display = 'none';
        suggestionsButtonMinus.style.display = 'block';
    });

    suggestionsButtonMinus.addEventListener('click', function () {

        suggestionsMore.style.maxHeight = null;

        suggestionsButtonPlus.style.display = 'block';
        suggestionsButtonMinus.style.display = 'none';
    });

});