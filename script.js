
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


window.addEventListener('scroll', function () {
    var scrollButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {

    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');


    menuButton.addEventListener('click', function () {

        menu.classList.toggle('menu-open');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('playButton');
    const videoPopup = document.getElementById('videoPopup');
    const closeButton = document.getElementById('closeButton');


    playButton.addEventListener('click', function () {
        videoPopup.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        videoPopup.style.display = 'none';
    });

});



$(".jsReadMore").click(function () {
    $(".about-text").slideDown(500);
    $(this).hide();
});

$(".jsReadLess").click(function () {
    $(".about-text").slideUp(500);
    $(".jsReadMore").show();
});

$(".jsReadMore").click(function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    $(".about-text").slideDown(500);
    $(this).hide();
});


// $(".jsReadMore").click(function () {
//     $(".about-text").slideDown(500);
//     $(this).hide();
// });



jQuery.noConflict();
