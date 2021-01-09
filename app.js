const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const bgVideo = document.querySelector('.bgVideo');

bgVideo.muted = true;
bgVideo.play();

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
});
