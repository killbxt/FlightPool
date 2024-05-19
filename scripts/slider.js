let slideIndex = 0;
const slides = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slide').length;
const slideWidth = document.querySelector('.slide').clientWidth;

function nextSlide() {
  slideIndex++;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  showSlide();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }
  showSlide();
}

function showSlide() {
  const offset = -slideIndex * slideWidth;
  slides.style.transform = `translateX(${offset}px)`;
}
setInterval(nextSlide, 5000);

function handleFormSubmit(event) {
  event.preventDefault(); 
  var email = document.getElementById('email').value;
  if (email) {
      window.location.href = 'htmls/login.html'; 
  } else {
      alert('Пожалуйста, введите свой email.');
  }
}