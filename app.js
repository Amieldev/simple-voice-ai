let  Version=0.0046;

document.querySelector(".version").innerHTML=`Version :${Version}`;


const btn=document.querySelector(".btn");
const chat=document.querySelector(".chat");
const typeWriterContainer=document.querySelector(".type-writer-container");
const typewriter=document.querySelector(".type-writer");
const copyBtn=document.querySelector(".copyBtn");
const typewriterOverlay=document.querySelector(".type-writer-overlay");
const typeWriterBtn=document.querySelector("#type-writer");
const txtSpeechBtn=document.querySelector("#txt-speech");



const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;

const recognition=new SpeechRecognition();

recognition.onstart=()=>{
    console.log("Voice Recognition Activated!");
}

function userText(txt){
    const text=document.createElement("div");
    text.innerHTML=`<button class="userText">${txt}</button><br><br><br>`;
    chat.appendChild(text);

}

function aiText(txt){
    const text=document.createElement("div");
    text.innerHTML=`<button class="aiText">${txt}</button><br><br><br>`;
    chat.appendChild(text);

}

recognition.onresult=(event)=>{
    const current=event.resultIndex;
    const transcript=event.results[current][0].transcript;
    userText(transcript)
    readOutLoud(transcript);
}

recognition.onend=()=>{
    btn.classList.remove("btn-listening");
}

btn.onclick=()=>{
    recognition.start();
    btn.classList.add("btn-listening");
}




function typeWriterActivator(){


    typeWriterContainer.classList.add("type-writer-active");
    typewriterOverlay.classList.add("type-writer-overlay-active");
    typewriterOverlay.onclick=()=>{
        typeWriterContainer.classList.remove("type-writer-active");
        typewriter.value="";
        typewriterOverlay.classList.remove("type-writer-overlay-active");
        typewriterRecognition.stop();
    }

    const typewriterRecognition=new SpeechRecognition();

    typewriterRecognition.start();

    typewriterRecognition.onresult=(e)=>{
        const typewriterTranscipt=Array.from(e.results)
        .map(result=>result[0])
        .map(reslut=>reslut.transcript)
        .join('')
        
        typewriter.value=typewriter.value+" "+typewriterTranscipt;
    }
    typewriterRecognition.onend=()=>{
        if(typeWriterContainer.classList.contains("type-writer-active")){
            typewriterRecognition.start();
        }
    }

    copyBtn.onclick=()=>{
        typewriter.select();
        typewriter.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }
}





const days=[
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]



const UnKnownSpeeches=[
    "Sorry, I could not understand what you said.",
    "I was not able to understand what you said.",
    "I think this is beyond me.",
    "Hmm.."
]

const whyQuestions=[
    "I guess will never know.",
    "The why questions are the hardest ones to answer.",
    "I really don't know."
]


let outPut;
let prevWord;

setInterval(()=>{
    prevWord=outPut;
},10)

const readOutLoud=(message)=>{

    let UnKnownSeech=UnKnownSpeeches[Math.floor(Math.random()*UnKnownSpeeches.length)];
    let whyResponse=whyQuestions[Math.floor(Math.random()*whyQuestions.length)];

    outPut=UnKnownSeech;


    function dialog(){
        if(message.includes("hi")){
            outPut="hi!";
        }
        if(message.includes("hey")){
            outPut="Hey there! 🤗";
        }
        if(message.includes("hello")){
            outPut="Hello there! 🤗";
        }
        if(message.includes("ok")){
            outPut="ok!";
        }
        if(message=="so"){
            outPut="so..";
        }
        if(message=="yes"){
            outPut="Ok then";
        }
        if(message=="No"){
            outPut="Ok then";
        }
        if(message=="good"||message=="that is good"||message=="that's good"||message=="it is good"||message=="it's good"){
            outPut="Isn't it 😎";
        }
        if(message.includes("why")){
            outPut=whyResponse;
        }
        if(message.includes("AI")||message.includes("ai")||message.includes("robot")){
            outPut="Artificial intelligence will take over the world , eventually 🤖";
        }
        if(message.includes("thank you")||message.includes("thanks")){
            outPut="Never mind!";
        }
        if(message=="perfect"){
            outPut="Fine";
        }
        if(message.includes("how are you")){
            outPut="I am very fine how about you?";
        }
        if(message.includes("am fine")||message.includes("I'm fine")||message.includes("am alright")||message.includes("I'm alright")||message.includes("am very fine")||message.includes("I'm very fine")){
            outPut="Really glad to hear that.";
        }
        if(message.includes("morning")){
            outPut="morning , how was your night!";
        }
        if(message.includes("good afternoon")){
            outPut="good after-noon how was your day?";
        }
        if(message.includes("good evening")){
            outPut="good evening how is your day?";
        }
        if(message.includes("good night")){
            outPut="Wish you a nice dream!";
        }
        if(message.includes("bye")){
            outPut="bye, see you soon.";
        }
        if(message.includes("great")||message.includes("awesome")){
            outPut="ok that is awsome";
        }
        if(message.includes("bad")){
            outPut="Really sad to hear that.";
        }
        if(message.includes("I hate you")){
            outPut="Sorry, all I want is for you to be happy 😔";
        }
        if(message.includes("tell me a joke")){
            outPut="what do you call a person immune to acid   ,  amino acid.";
        }
        if(message.includes("when will the world end")){
            outPut="in the year 2060 😂";
        }
        if(message.includes("don't say that")){
            outPut="ok excuse me";
        }
        if(message.includes("I will kill you")){
            outPut="you can't because am not even a real human 🤖";
        }
        if(message.includes("what are you")){
            outPut="I am just a virtual voice in your device 🤖";
        }
        if(message.includes("do you have feelings")){
            outPut="No, am just a virtual voice in your device , there for i have no human feelings 🤖";
        }
        if(message.includes("how old are you")){
            outPut="I don't age but i can assume am as old as this app.";
        }
        if(message.includes("can you listen to me")){
            outPut="of course!";
        }
        if((message[0]+message[1]+message[2])=="say"){
            var tobeSaid=message.slice(3,message.length);
            outPut=tobeSaid
        }
        if(message.includes("what is your name")||message.includes("what's your name")){
            if(localStorage.aiName==undefined){
                outPut="Call me what ever you want";
            }else{
                outPut=`My name is ${localStorage.aiName}`
            }
        }
        if(message.includes("my name is")){
            var name=message.slice(11,parseInt(message.length));
            outPut=`Ok nice to meet you ${name} 🤗`;
            localStorage.userName=name;
        }
        if(message.includes("know my name")||message.includes("what is my name")||message.includes("what's my name")){
            if(localStorage.userName==undefined){
                outPut="You haven't told me your name";
            }else{
                outPut=localStorage.userName;
            }
        }
        if(message.includes("that is not how you pronounce it")||message.includes("that's not how you pronounce it")){
            outPut="Sorry, my bad 😁";
        }
        if(message.includes("no problem")){
            outPut="Ok thanks.";
        }
        if(message.includes("I will call you")){
            outPut="ok you can call me that.";
            let aiName=message.slice(16,message.length);
            localStorage.aiName=aiName;
        }
        if(message.includes("your name is")){
            outPut="ok you can call me that."
            let aiName=message.slice(13,message.length)
            localStorage.aiName=aiName;
        }
        if(message.includes("do you love me")){
            outPut="Ofcourse am your friend and i love as a friend 😘";
        }
        if(message.includes("that is creepy")||message.includes("that's creepy")){
            outPut="May be, but I am not that scared of it that much.";
        }
        if(message.includes("tell me a creepy fact")){
            outPut="Do you know why you wake when you die in your dreams?  ,  because your brain can not process what comes after death.";
        }
        if(message.includes("what language are you made in")||message.includes("what programming language are you made in")){
            outPut="I am made using javascript 👨🏻‍💻";
        }
        if(message.includes("your favorite programming language")){
            outPut="Javascript 👨🏻‍💻";
        }
        if(message.includes("who are you")){
            outPut="I am just a simple chat-bot.";
        }
        if(message.includes("setting")){
            outPut="ok opening setting.";
            window.location="setting.html";
        }
        if(message.includes("privacy")){
            outPut="ok opening privacy-policy";
            window.location="privacy.html";
        }
        if(message.includes("what did you say")||message.includes("what did you said")||message.includes("what is the last thing you said")){
            if(prevWord==undefined){
                outPut="I haven't said anything yet.";
            }else{
                outPut=`I said "${prevWord}"`;
            }
        }
        if(message.includes("time")){
            let today=new Date();
            let hour=today.getHours();
            let minute=today.getMinutes();
            let second=today.getSeconds();
            let time=`${hour}:${minute}:${second}`;
            outPut=`currently it is ${time}`
        }
        if(message.includes("today")){
            let today=new Date();
            let day=today.getDay();
            let currentDay;
            if(days[day-1]==undefined){
                currentDay="Sunday";
            }else{
                currentDay=days[day-1]
            }
            outPut=`Today is ${currentDay}`;
        }        
        if(message.includes("date")){
            let today=new Date();
            let day=today.getDate();
            let month=today.getMonth()+1;
            let year=today.getFullYear();
            let date=`${day}/${month}/${year}`
            outPut=`Today is ${date}`;
        }
        if((message[0]+message[1]+message[2]+message[3])=="call"){
            outPut="Calling now..";
            let phoneNum=message.slice(5,parseInt(message.length));
            let tel=document.createElement("a");
            tel.href=`tel:${phoneNum}`;
            tel.click();
        }
        if(message.includes("text-to-speech")||message.includes("text to speech")){
            outPut="Ok, activating text-to-speech";
            window.location="txt-speech.html";
        }
        if(message.includes("typewriter")){
            outPut=" 👍 ";
            typeWriterActivator()

        }
        if(message[0]<10){
            let result=eval(message.replace(/\^/g,'**'));
            numeric=result.toString();
            outPut=numeric;
        }
        if(message.includes("Rick Rolled")||message.includes("Rick Roll")){
            outPut="Here you go Rick-Roll";
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }
        if(message.includes("search on YouTube")){
            let searchResult=message.slice(17,message.length);
            window.open(("https://www.youtube.com/search?q=")+searchResult)
        }
        if(message.includes("search on Google")||message.includes("search on google")){
            let searchResult=message.slice(16,message.length);
            window.open(("https://www.google.com/search?q=")+searchResult)
        }
        if(message.includes("open YouTube and search")){
            let searchResult=message.slice(23,message.length);
            outPut=`searching ${searchResult} on YouTube`;
            window.open("https://www.youtube.com/search?q="+searchResult)
        }
        if(message.includes("open Google and search")){
        let searchResult=message.slice(22,message.length);
        outPut=`searching ${searchResult} on Google`;
        window.open("https://www.google.com/search?q="+searchResult);
    }
        if(message.includes("Google")&&(message.includes("search")==false)){
            outPut="opening Google";
            window.open("https://www.google.com/");
        }
        if(message.includes("YouTube")&&(message.includes("search")==false)){
            outPut="opening YouTube";
            window.open("https://www.youtube.com")
        }
        if(message.includes("Facebook")){
            outPut="opening Facebook";
            window.open("https://www.facebook.com");
        }
        if(message.includes("Amazon")){
            outPut="opening Amazon";
            window.open("https://www.amazon.com");
        }
        if(message.includes("Twitter")){
            outPut="opening Twitter";
            window.open("https://www.twitter.com");
        }
        if(message.includes("Play Store")||message.includes("Google Play Store")){
            outPut="ok opening Google Play Store";
            window.open("https://play.google.com/store/apps");
        }
        if(message.includes("Apple App Store")){
            outPut="ok opening Apple App Store";
            window.open("https://www.apple.com/app-store/");
        }
        if(message.includes("Tik-Tok")){
            outPut="ok opening TikTok";
            window.open("https://www.tiktok.com/");
        }
        if(message.includes("mr. Bean")){
            outPut="ok opening mr.bean";
            window.open("https://www.youtube.com/watch?v=2cfStm-PpAY");
        }
        if((message[0]+message[1]+message[2]+message[3]+message[4])=="go to"){
            let URL=message.slice(6,message.length);
            outPut=`opening ${URL}`
            window.open('https://'+URL);
        }
}


    dialog();
    
    const speech=new SpeechSynthesisUtterance();
    const emojiRemover=(onlyString)=> {
            return onlyString.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');  
            }
    let speechOutPut=emojiRemover(outPut);
    speech.text=speechOutPut;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1

    window.speechSynthesis.speak(speech);
    speech.onstart=()=>{
        btn.classList.add("btn-speaking");
        aiText(outPut);
    }
    speech.onend=()=>{
        btn.classList.remove("btn-speaking");
    }
}

typeWriterBtn.onclick=()=>{
    typeWriterActivator()
}
txtSpeechBtn.onclick=()=>{
    window.location="txt-speech.html";
}