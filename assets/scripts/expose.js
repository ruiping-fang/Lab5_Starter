// expose.js
window.addEventListener("DOMContentLoaded", init);
function init() {
  // TODO
  const selectElement = document.getElementById("horn-select");
  const imgElement = document.querySelector("img");
  const audioElement = document.querySelector("audio");

  selectElement.addEventListener("change", (event) => {
    if (event.target.value == "air-horn") {
      imgElement.src = "assets/images/air-horn.svg";
      audioElement.src = "assets/audio/air-horn.mp3";
    } else if (event.target.value == "car-horn") {
      imgElement.src = "assets/images/car-horn.svg";
      audioElement.src = "assets/audio/car-horn.mp3";
    } else if (event.target.value == "party-horn") {
      imgElement.src = "assets/images/party-horn.svg";
      audioElement.src = "assets/audio/party-horn.mp3";
    }
  });

  const slider = document.getElementById("volume");
  const volumeIcon = document.querySelector("div img");
  slider.addEventListener("change", (event) => {
    let value = event.target.value;
    if (value == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (value < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (value < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
    audioElement.volume = value / 100;
  });

  const button = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  button.addEventListener("click", (event) => {
    if (selectElement.value == "party-horn") {
      jsConfetti.addConfetti();
    }
    audioElement.play();
  });
}
