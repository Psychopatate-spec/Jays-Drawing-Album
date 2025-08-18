const fullscreenImages = document.querySelector('.fullscreenImages');
const fullscreenImageEls = document.querySelectorAll('.fullscreenImage');
const normalImageEls = document.querySelectorAll('.card_image');

let isFullscreen = false;
let currentIndex = null;

const fullscreenOn = (index) => {
  fullscreenImages.classList.add("isFullscreen");
  fullscreenImageEls[index].removeAttribute("hidden");
  document.body.classList.add("fullscreen-active");
  isFullscreen = true;
  currentIndex = index;
};

const fullscreenOff = () => {
  fullscreenImages.classList.remove("isFullscreen");
  if (currentIndex !== null) {
    fullscreenImageEls[currentIndex].setAttribute("hidden", "");
  }
  document.body.classList.remove("fullscreen-active");
  isFullscreen = false;
  currentIndex = null;
};

normalImageEls.forEach((img, idx) => {
  img.addEventListener("click", () => {
    if (!isFullscreen) {
      fullscreenOn(idx);
    }
  });
});

fullscreenImages.addEventListener("click", () => {
  if (isFullscreen) {
    fullscreenOff();
  }
});