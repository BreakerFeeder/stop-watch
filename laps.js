window.onload=function(){
    const minutes=document.getElementById("minutes");
    const tens=document.getElementById("tens");
    const secends=document.getElementById("secends");
    const startBtn=document.getElementById("start-btn");
    const stopBtn=document.getElementById("stop-btn");
    const resetBtn=document.getElementById("reset-btn");
    let minutesSet=00;
    let secondsSet=00;
    let tensSet=00;
    let Interval;
    startBtn.onclick=function(){
        if (!Interval){
            Interval =setInterval(startTimer,10);
            dimEffect();
        }
    }
    // stop btn
    stopBtn.onclick=function () {
        clearInterval(Interval);
        Interval = false;
        const lap=document.getElementById("laps");
        const li=document.createElement("li");
        li.innerHTML=`lap :${minutes.innerHTML}:${secends.innerHTML}:${tens.innerHTML}`;
        lap.appendChild(li);
        dimEffect();
    }
    //reset btn
    resetBtn.onclick=function(){
        clearInterval(Interval);
        Interval = false;
        minutesSet="00";
        secondsSet="00";
        tensSet="00";
        minutes.innerHTML=minutesSet;
        secends.innerHTML=secondsSet;
        tens.innerHTML=tensSet;
        document.getElementById("laps").innerHTML="";
    }
    //create Start Timer function
    function startTimer(){
        tensSet++;
        if(tensSet<9){
            tens.innerHTML="0"+tensSet;
        }
        if (tensSet>9) {
            tens.innerHTML=tensSet;
        }
        if (tensSet>99) {
            secondsSet++;
            secends.innerHTML="0"+secondsSet;
            tensSet= 0;
            tens.innerHTML="0"+0;
        }
        if (secondsSet>9) {
            secends.innerHTML=secondsSet;
        }
        if (secondsSet==60) {
            minutesSet++;
            minutes.innerHTML="0"+minutesSet;
            secondsSet= 0;
            // secends.innerHTML="0"+0;
        }

    }
    function dimEffect(){
        const laptime =document.querySelector(".lap-time");
        laptime.classList.toggle("diming-effect")
    }
}
