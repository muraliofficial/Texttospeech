let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("#voices");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        let option = new Option(voice.name + ' (' + voice.lang + ')', i);
        voiceSelect.appendChild(option);
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("#speakBtn").addEventListener("click", () => {
    speech.text = document.querySelector("#text").value;
    window.speechSynthesis.speak(speech);
});
