// Load the IFrame API
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('background-music', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Set the player to autoplay
    event.target.playVideo();
}

// Play/Pause Button Functionality
document.getElementById('play-pause').addEventListener('click', () => {
    const button = document.getElementById('play-pause');
    if (player) {
        if (player.getPlayerState() === YT.PlayerState.PLAYING) {
            player.pauseVideo();
            button.textContent = 'Play Music';
        } else {
            player.playVideo();
            button.textContent = 'Pause Music';
        }
    }
});
