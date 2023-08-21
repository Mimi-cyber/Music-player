const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const backwardButton = document.getElementById('backward');
const forwardButton = document.getElementById('forward');
const musicImage = document.getElementById('img-music');

let isPlaying = false;
let currentSongIndex = 0;


function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
    toggleImageRotation();
}


function toggleImageRotation() {
    if (isPlaying) {
        musicImage.style.animation = 'rotation 1s linear infinite';
    } else {
        musicImage.style.animation = 'none';
    }
}

playButton.addEventListener('click', togglePlayPause);
backwardButton.addEventListener('click', playPrevious);
forwardButton.addEventListener('click', playNext);

const songs = [
    'music/Happy-Upbeat-Ukulele.mp3', 'music/dance tropical.mp3', 'music/game music.mp3', 'music/orchestral.mp3'
];

function playPrevious() {
    if (currentSongIndex > 0) {
        currentSongIndex--;
    } else {
        currentSongIndex = songs.length - 1; // Wrap to the last song
    }
    audio.src = songs[currentSongIndex];
    audio.play();
    isPlaying = true;
    toggleImageRotation();
}

function playNext() {
    if (currentSongIndex < songs.length - 1) {
        currentSongIndex++;
    } else {
        currentSongIndex = 0; // Wrap to the first song
    }
    audio.src = songs[currentSongIndex];
    audio.play();
    isPlaying = true;
    toggleImageRotation();
}

audio.addEventListener('ended', () => {
    playNext();   
});
