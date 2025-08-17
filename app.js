const cards = document.getElementsByClassName("card");
const images = document.getElementsByClassName("card_image");
const overlay = document.getElementById("overlay");
const darkOverlay = document.getElementById("darkOverlay");

let isFullscreen = false;
let currentFullscreenCard = null;

const toogleFullscreen = (card, overlay, darkOverlay) => {
  card.classList.add("fullscreen");
  overlay.classList.add("overlay");
  darkOverlay.classList.add("darkOverlay");
  document.body.classList.add("fullscreen-active");
  isFullscreen = true;
  currentFullscreenCard = card;
};

const removeFullscreen = (card, overlay, darkOverlay) => {
  card.classList.remove("fullscreen");
  overlay.classList.remove("overlay");
  darkOverlay.classList.remove("darkOverlay");
  document.body.classList.remove("fullscreen-active");
  isFullscreen = false;
  currentFullscreenCard = null;
};

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function () {
    const card = images[i].parentElement;
    if (!isFullscreen) {
      toogleFullscreen(card, overlay, darkOverlay);
    } else if (isFullscreen && currentFullscreenCard === card) {
      removeFullscreen(card, overlay, darkOverlay);
    }
  });
};

overlay.addEventListener("click", function () {
  if (isFullscreen && currentFullscreenCard) {
    removeFullscreen(currentFullscreenCard, overlay, darkOverlay);
  }
});