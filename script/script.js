let slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n, sliderId) {
    showSlides1(slideIndex1 += n, sliderId);
}

// Thumbnail image controls
function currentSlide1(n, sliderId) {
    showSlides1(slideIndex1 = n, sliderId);
}

function showSlides1(n, sliderId) {
    let i;
    let slides = document.getElementsByClassName("mySlides_1");
    if (n > slides.length) { slideIndex1 = 1}
    if (n < 1) { slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[slideIndex1-1].classList.remove("show");
    }
    slides[slideIndex1-1].style.display = "block";
    slides[slideIndex1-1].classList.add("show");
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n, sliderId) {
    showSlides2(slideIndex2 += n, sliderId);
}

// Thumbnail image controls
function currentSlide2(n, sliderId) {
    showSlides2(slideIndex2 = n, sliderId);
}

function showSlides2(n, sliderId) {
    let i;
    let slides = document.getElementsByClassName("mySlides_2");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[slideIndex2 - 1].classList.remove("show");
    }
    slides[slideIndex2 - 1].style.display = "block";
    slides[slideIndex2 - 1].classList.add("show");
}
