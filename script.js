// // scripts.js

// // Mobile Navigation Toggle
// document.querySelector('.navbar-toggle').addEventListener('click', () => {
//     const navbarLinks = document.querySelector('.navbar-links');
//     navbarLinks.classList.toggle('active');
// });

// // Carousel Controls
// const prevButton = document.querySelector('.carousel-controls .prev');
// const nextButton = document.querySelector('.carousel-controls .next');
// const carouselItems = document.querySelector('.carousel-items');
// let currentIndex = 0;

// const updateCarousel = () => {
//     const itemsCount = document.querySelectorAll('.carousel-item').length;
//     const itemWidth = 100 / itemsCount;
//     carouselItems.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
// };

// prevButton.addEventListener('click', () => {
//     currentIndex = (currentIndex > 0) ? currentIndex - 1 : document.querySelectorAll('.carousel-item').length - 1;
//     updateCarousel();
// });

// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex < document.querySelectorAll('.carousel-item').length - 1) ? currentIndex + 1 : 0;
//     updateCarousel();
// });

// // Smooth Scroll for Navigation Links
// document.querySelectorAll('.navbar-links a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });


// // function loadPage(page) {
// //     const xhr = new XMLHttpRequest();
// //     xhr.open('GET', page, true);
// //     xhr.onload = function () {
// //         if (xhr.status === 200) {
// //             document.getElementById('content').innerHTML = xhr.responseText;
// //         } else {
// //             document.getElementById('content').innerHTML = 'Page not found.';
// //         }
// //     };
// //     xhr.send();
// // }
