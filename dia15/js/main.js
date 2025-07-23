document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('videoFondo');
  const audio = document.getElementById('audioPlayer');

  audio.addEventListener('play', () => {
    video.play();
  });

  audio.addEventListener('pause', () => {
    video.pause();
  });

  audio.addEventListener('ended', () => {
    video.pause();
  });
});