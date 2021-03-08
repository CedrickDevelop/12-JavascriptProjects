/////////////////////////////////////////////////////////////////////
// CONSTANTES DE BASE////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
const video = document.querySelector('.video');
const btnPausePlay = document.getElementById('play-pause');
const img = document.querySelector('#play-pause img');
const barreOrange = document.querySelector('.barre-orange');
const juice = document.querySelector('.juice')
const muteBtn = document.getElementById('mute');
const fullScreen = document.getElementById('fullscreen');
const volumeSlider = document.getElementById('volume-slider');
/////////////////////////////////////////////////////////////////////
// AFFICHAGE DU PLAY PAUSE////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
btnPausePlay.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);

function togglePlayPause(){
    if(video.paused){
        img.src = "ressources/pause.svg";
        video.play();
    }
    else {
        img.src = "ressources/play.svg";
        video.pause();
    }
}

/////////////////////////////////////////////////////////////////////
// BARRE DE PROGRESSION DE LA VIDEO//////////////////////////////////
/////////////////////////////////////////////////////////////////////

video.addEventListener('timeupdate', () => {
   
        let juicePos = video.currentTime / video.duration;

        juice.style.width = juicePos * 100 + "%";

    if(video.ended){
        img.src = "ressources/play.svg";
    }

})


/////////////////////////////////////////////////////////////////////
// GESTION DU VOLUME ////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

volumeSlider.addEventListener('change', () => {

    video.volume = volumeSlider.value / 100;
    console.log(video.volume)

})


/////////////////////////////////////////////////////////////////////
// METTRE LE SON EN SILENCE ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

muteBtn.addEventListener('click', () => {

    if(video.muted){
        video.muted = false;
        muteBtn.innerText = "Mute";
    }
    else {
        video.muted = true;
        muteBtn.innerText = "Unmute";
    }

})

/////////////////////////////////////////////////////////////////////
// CHOIX DE LA POSITION DE LA VIDEO /////////////////////////////////
/////////////////////////////////////////////////////////////////////

let rect = barreOrange.getBoundingClientRect();
let largeur = rect.width;

barreOrange.addEventListener('click', (e) => {

    let x = e.clientX - rect.left;

    let widthPercent = ((x*100/largeur));
    console.log(widthPercent);

    let durationVideo = video.duration;

    // position en seconde par rapport au pourcentage
    video.currentTime = durationVideo * (widthPercent / 100);

})

/////////////////////////////////////////////////////////////////////
// REDIMENSIONNNER LA VIDEO /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
window.addEventListener('resize', () => {
    let rect = barreOrange.getBoundingClientRect();
    let largeur = rect.width;

})

/////////////////////////////////////////////////////////////////////
// REDIMENSIONNNER LA VIDEO AVEC CLICK //////////////////////////////
/////////////////////////////////////////////////////////////////////
video.addEventListener('dblclick', () => {
    video.requestFullscreen();
})
fullScreen.addEventListener('click', () => {
    video.requestFullscreen();
})

