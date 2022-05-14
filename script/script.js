let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n, sliderId) {
    showSlides(slideIndex += n, sliderId);
}

// Thumbnail image controls
function currentSlide(n, sliderId) {
    showSlides(slideIndex = n, sliderId);
}

function showSlides(n, sliderId) {
    let i;
    let slides = document.getElementsByClassName("mySlides_" + sliderId);
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[slideIndex-1].classList.remove("show");
    }
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].classList.add("show");
}