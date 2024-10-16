  document.querySelector('.hamburger-icon').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
  });

// END HUMBURGER NAVBAR //
const testimonialItems = document.querySelectorAll('.testimonial__item');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function showSlide(index) {
  testimonialItems.forEach(item => {
    item.classList.remove('active');
  });
  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  testimonialItems[index].classList.add('active');
  dots[index].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % testimonialItems.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000); 

showSlide(currentIndex);


