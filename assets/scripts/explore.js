// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const voiceSelect = document.querySelector("#voice-select");
  const textarea = document.getElementById("text-to-speak");
  const button = document.querySelector("button");
  const img = document.querySelector("img");

  const synth = window.speechSynthesis;
  let voices;
  const loadVoices = () => {
    voices = synth.getVoices(); // return a list of supported voices

    // map Voice objects to html option elements
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("value", voices[i].name);
      voiceSelect.appendChild(option);
    }
  };

  if ("onvoiceschanged" in synth) {
    synth.onvoiceschanged = loadVoices;
  } else {
    loadVoices();
  }

  button.addEventListener("click", (event) => {
    let utterance = new SpeechSynthesisUtterance(textarea.value);
    utterance.addEventListener("end", () => {
      img.src = "assets/images/smiling.png";
    });
    const selectedOption = voiceSelect.value;
    // map selected option back to Voice object
    for (let i = 0; i < voices.length; i++) {
      let voice = voices[i];
      if (selectedOption == voice.name) {
        utterance.voice = voice;
        break;
      }
    }
    img.src = "assets/images/smiling-open.png";
    synth.speak(utterance);
  });
}
