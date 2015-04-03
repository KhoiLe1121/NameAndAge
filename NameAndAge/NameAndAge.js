function increaseAge() {
    $('.ageCell').each(function () {
        $(this).text(parseInt($(this).text()) + 1);
    });
}