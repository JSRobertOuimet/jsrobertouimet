/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("nav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("nav").style.width = "0%";
}

// var mus = document.getElementById("mus");
// var isPlaying = false;

// function togglePlay() {
//   if (isPlaying) {
//     mus.pause()
//   } else {
//     mus.play();
//   }
// };
// mus.onplaying = function() {
//   isPlaying = true;
// };
// mus.onpause = function() {
//   isPlaying = false;
// };

var playing = false;
var initDone = false;

var audioElement = null;

$("#music").click(function() {
  if (playing) {
    // Stop playing
    audioElement.pause();
  } else {
    // Start playing
    if (!initDone) {
      initDone = true;

      audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'snd/test.mp3');

      audioElement.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
      }, false);
    }

    audioElement.play();
  }

  $(this).find('i').toggleClass('fa fa-play-circle fa fa-pause-circle');
  playing = !playing;
});