const textBox=document.querySelector(".text-box");
const btn=document.querySelector(".play-pause-btn");

const volumeValue=document.querySelector(".volume");
const rateValue=document.querySelector(".rate");
const pitchValue=document.querySelector(".pitch");



btn.onclick=()=>{
    speakText(textBox.value);
}

function speakText(text){
    const speech=new SpeechSynthesisUtterance();
    speech.text=text;
    speech.volume=parseInt(volumeValue.value)/10;
    speech.rate=parseInt(rateValue.value)/10;
    speech.pitch=parseInt(pitchValue.value)/10;
    window.speechSynthesis.speak(speech);
}