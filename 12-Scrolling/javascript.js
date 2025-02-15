var slides = document.querySelectorAll(".main-container"); 
var lines = document.querySelectorAll(".line-effect")

slides.forEach(function(slide) {
  slide.addEventListener("click", function() {
    slide.style.height = "30vh";
    slide.style.transition ="all .4s ease"; 
    lines.style.display ="none";
  });
});

const mianImage = document.getElementById('mainImage');
const image4 = document.getElementById("image4");
  window.addEventListener('scroll', () => { 
 const newWidth = 100 - window.scrollY / 50; 
 mianImage.style.width = (newWidth > 50 ? newWidth : 50) + '%';

 });