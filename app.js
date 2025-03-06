let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select"); // Use the specific selector

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  // Check if voiceSelect exists before using it
  if (voiceSelect) {
    voiceSelect.innerHTML = ""; // Clear previous options if any
    voices.forEach((voice, i) => {
      let option = document.createElement("option");
      option.text = voice.name;
      option.value = i; // or voice.name; you can use whatever logic here
      voiceSelect.add(option);
    });
  } else {
      console.error("voiceSelect element not found");
  }
};

//Check if select element exists before adding a listener
if(voiceSelect) {
    voiceSelect.addEventListener("change", () => {
        speech.voice = voices[voiceSelect.value];
    });
}else {
    console.error("voiceSelect element not found");
}


document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});



