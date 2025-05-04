const video = document.querySelector("video");
const playButton = document.querySelector(".player__button");
const volumeSlider = document.querySelector("input[name='volume']");
const speedSlider = document.querySelector("input[name='playbackSpeed']");
const rewindButton = document.querySelector(".rewind");
const forwardButton = document.querySelector(".forward");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");

// Toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause button icon
function updateButton() {
  playButton.textContent = video.paused ? "►" : "❚ ❚";
}

// Volume control
function handleVolumeChange() {
  video.volume = volumeSlider.value;
}

// Speed control
function handleSpeedChange() {
  video.playbackRate = speedSlider.value;
}

// Skip
function skipTime(seconds) {
  video.currentTime += seconds;
}

// Progress bar update
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// Scrub through video
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", updateProgress);

playButton.addEventListener("click", togglePlay);
volumeSlider.addEventListener("input", handleVolumeChange);
speedSlider.addEventListener("input", handleSpeedChange);
rewindButton.addEventListener("click", () => skipTime(-10));
forwardButton.addEventListener("click", () => skipTime(25));
progress.addEventListener("click", scrub);
