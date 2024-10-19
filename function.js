
let textarea = document.querySelector("textarea");
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
       voices = window.speechSynthesis.getVoices();
       speech.voice = voices[0];


       voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};


let speech = new SpeechSynthesisUtterance();
document.querySelector("button").addEventListener("click", () =>
{
         speech.text = document.querySelector("textarea").value; //fetch the data from text area 
         window.speechSynthesis.speak(speech);
});


document.getElementById("cnl").addEventListener("click", () =>{
    document.querySelector("textarea").value="";
});
