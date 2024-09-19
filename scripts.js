// // Header Scroll 
// let nav = document.querySelector(".navbar");
// window.onscroll = function() {
//     if(document.documentElement.scrollTop > 50){
//         nav.classList.add("header-scrolled");
//         nav.classList.add("navbar-bgcolor");
       
//     }else{
//         nav.classList.remove("header-scrolled");
//         nav.classList.remove("navbar-bgcolor");
//     }
// }


document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', function() {
        // Toggle the 'active' class on the nav menu to open/close it
        navMenu.classList.toggle('active');

        // Change the icon based on whether the menu is active or not
        if (navMenu.classList.contains('active')) {
            // Change to close icon (✖) when the menu is open
            menuToggle.innerHTML = '<i class="fas fa-times navbar-toggler-icon"></i>';
        } else {
            // Change back to hamburger icon (☰) when the menu is closed
            menuToggle.innerHTML = '<i class="fas fa-bars navbar-toggler-icon"></i>';
        }
    });
});









const gallery = document.querySelector('.insta-gallery');
const images = document.querySelectorAll('.gallery-image');

function updateImageSizes() {
    const galleryRect = gallery.getBoundingClientRect();
    const galleryCenter = galleryRect.left + galleryRect.width / 2; // Calculate the center of the gallery

    images.forEach(image => {
        const imageRect = image.getBoundingClientRect();
        const imageCenter = imageRect.left + imageRect.width / 2; // Calculate the center of each image
        const distanceFromCenter = Math.abs(galleryCenter - imageCenter); // Calculate distance from the gallery center
        
        // Scale based on distance from the center (closer images are larger)
        const scaleFactor = Math.max(1 - distanceFromCenter / 300, 0.75); // Adjust size change speed and set min scale to 0.75
        image.style.transform = `scale(${scaleFactor})`; // Apply the scale transformation using template literals
    });
}

// Trigger the scaling function on scroll and resize
gallery.addEventListener('scroll', updateImageSizes);
window.addEventListener('resize', updateImageSizes);

// Initial call to set image sizes
updateImageSizes();



    
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,  // Show 2 slides (images) at a time
        spaceBetween: 30,  // Space between slides
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });

