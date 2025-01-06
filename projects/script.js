document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
});

window.onload = function() {
    const markers = document.querySelectorAll('.map-marker');

 function animateMap() {
  markers.forEach((marker, index) => {
    gsap.to(marker, { 
      opacity: 1, 
      duration: 0.5, 
      delay: index * 0.5, 
      ease: 'power2.out' 
    });
     
  });
 }
  
    animateMap();
  };