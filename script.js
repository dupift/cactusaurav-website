const themeButton = document.getElementById('theme-button');
const themeIcon = document.getElementById('theme-icon');

let isDarkTheme = false;

themeButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeIcon.src = 'night-mode.png'; 
        themeIcon.alt = 'Night Mode Icon';
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeIcon.src = 'day-mode.png'; 
        themeIcon.alt = 'Day Mode Icon';
    }

    const currentTheme = isDarkTheme ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.src = 'night-mode.png';
    themeIcon.alt = 'Night Mode Icon';
    isDarkTheme = true;
} else if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.src = 'day-mode.png';
    themeIcon.alt = 'Day Mode Icon';
    isDarkTheme = false;
}


function closeWebsite() {
    window.close();
}

function minimizeWindow() {
    window.innerWidth = 100; 
    window.innerHeight = 100; 
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen(); 
         }
    }
}

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var meridiem = "AM";

    if (hours >= 12) {
        meridiem = "PM";
        hours = hours % 12 || 12; 
    }

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;

    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();



document.addEventListener("DOMContentLoaded", function() {
    const albumPoster = document.getElementById("albumPoster");
    albumPoster.addEventListener("click", toggleVinylAndSong);

    const sauravImg = document.getElementById("sauravImg");
    sauravImg.addEventListener("click", toggleVinylAndSong);
});

let isPlaying = false;

function toggleVinylAndSong(event) {                                           
    const clickedElementId = event.target.id;
    const validElements = ["sauravImg", "albumPoster"];

    if (validElements.includes(clickedElementId)) {
        const vinyl = document.getElementById("vinylImg");
        const audio = document.getElementById("audioPlayer");
        
        if (isPlaying) {
            vinyl.style.animationPlayState = "paused";
            audio.pause(); 
        } else {
            vinyl.style.animationPlayState = "running"; 
            audio.play(); 
        }
        
        isPlaying = !isPlaying; 
    }
}



function enterFullScreenOnMobile() {
    if (window.innerWidth <= 768) {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }
    }
}

window.onload = enterFullScreenOnMobile;
const images = document.querySelectorAll('.column img');


