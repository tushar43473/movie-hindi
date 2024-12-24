// ভিডিও প্লে/পজ ফাংশন
const playPauseBtn = document.getElementById('playPauseBtn');
const videoElement = document.getElementById('main-video');

// প্লে/পজ বোতাম কাজ
playPauseBtn.addEventListener('click', () => {
  if (videoElement.paused) {
    videoElement.play();
    playPauseBtn.innerHTML = '⏸️'; // পজ আইকন
  } else {
    videoElement.pause();
    playPauseBtn.innerHTML = '⏯️'; // প্লে আইকন
  }
});

// ভিডিও সাউন্ড কন্ট্রোল
const volumeControl = document.getElementById('volumeControl');
volumeControl.addEventListener('input', () => {
  videoElement.volume = volumeControl.value;
});

// ফুলস্ক্রীন মোড
const fullscreenBtn = document.getElementById('fullscreenBtn');
fullscreenBtn.addEventListener('click', () => {
  if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen();
  } else if (videoElement.mozRequestFullScreen) { // Firefox
    videoElement.mozRequestFullScreen();
  } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
    videoElement.webkitRequestFullscreen();
  } else if (videoElement.msRequestFullscreen) { // IE/Edge
    videoElement.msRequestFullscreen();
  }
});

// ভিডিও পরিবর্তন ফাংশন
function changeVideo(videoSrc) {
  videoElement.src = videoSrc;
  videoElement.play();
}

// থাম্বনেল হোভার করার জন্য ভিডিও পরিবর্তন
document.querySelectorAll('.thumbnail').forEach((thumb) => {
  thumb.addEventListener('mouseover', () => {
    const videoSrc = thumb.getAttribute('onclick').split("'")[1];
    changeVideo(videoSrc);
  });
});
// ভিডিও প্লেয়ারটি সিলেক্ট করুন
const videoElement = document.getElementById('main-video')