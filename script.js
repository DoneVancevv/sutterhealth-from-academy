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
// document.addEventListener('DOMContentLoaded', function () {
//     const readMoreBtn = document.querySelector('.readmore');
//     const additionalContent = document.querySelector('.readmore_content');

//     if (readMoreBtn && additionalContent) {
//         // Add event listener to the "Read more" button
//         readMoreBtn.addEventListener('click', function () {
//             // Toggle the visibility of the additional content
//             additionalContent.style.display = additionalContent.style.display === 'none' ? 'block' : 'none';
//             // Toggle the "clicked" class on the button
//             readMoreBtn.classList.toggle('clicked');
//         });
//     } else {
//         console.error('Read more button or additional content element not found.');
//     }
// });
