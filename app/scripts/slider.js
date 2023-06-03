let repairTime = document.querySelector(".repairTime");
let city = document.querySelector(".city");
let apartArea = document.querySelector(".apartArea");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
  showText(slideIndex);
}
function showText(n) {
  if (n === 1) {
    city.textContent = "Rostov-on-Don, LCD admiral";
    repairTime.textContent = `3.5 months`;
    apartArea.textContent = `81 m2`;
  }
  if (n === 2) {
    city.textContent = "Sochi thieves";
    repairTime.textContent = `4 months`;
    apartArea.textContent = `105 m2`;
  }
  if (n === 3) {
    city.textContent = "Rostov-on-Don, patriotic";
    repairTime.textContent = `3 months`;
    apartArea.textContent = `93 m2`;
  }
}
function currentSlide(n) {
  showSlides((slideIndex = n));
  if (n === 1) {
    city.textContent = "Rostov-on-Don, LCD admiral";
    repairTime.textContent = `3.5 months`;
    apartArea.textContent = `81 m2`;
  }
  if (n === 2) {
    city.textContent = "Sochi thieves";
    repairTime.textContent = `4 months`;
    apartArea.textContent = `105 m2`;
  }
  if (n === 3) {
    city.textContent = "Rostov-on-Don, patriotic";
    repairTime.textContent = `3 months`;
    apartArea.textContent = `93 m2`;
  }
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot-completed");
  let tabs = document.getElementsByClassName("tab");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace("current underlined", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  tabs[slideIndex - 1].className += " current underlined";
}

/* mobile slider */
var prevMob = document.querySelector(".buttonprev");
var nextMob = document.querySelector(".buttonnext");

prevMob.addEventListener("touchstart", () => {
  plusSlidesM(-1);
});

nextMob.addEventListener("touchstart", () => {
  plusSlidesM(1);
});
let slideIndexM = 1;
showSlidesM(slideIndexM);

function plusSlidesM(n) {
  showSlidesM((slideIndexM += n));
  showText(slideIndexM);
}

function currentSlideM(n) {
  showSlidesM((slideIndexM = n));
}

function showSlidesM(n) {
  let i;
  let slidesM = document.getElementsByClassName("mySlidesM");

  if (n > slidesM.length) {
    slideIndexM = 1;
  }
  if (n < 1) {
    slideIndexM = slidesM.length;
  }
  for (i = 0; i < slidesM.length; i++) {
    slidesM[i].style.display = "none";
  }

  slidesM[slideIndexM - 1].style.display = "block";
}
