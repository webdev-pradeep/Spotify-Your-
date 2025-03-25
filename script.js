//initialize the Variables
let songIndex = 0;
let audioElement = new Audio("assets/mixkit-night-sky-hip-hop-970.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songs = [
  {
    songName: "assets/mixkit-night-sky-hip-hop-970.mp3",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
];

//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("bx-play-circle");
    masterPlay.classList.add("bx-stop-circle");
    gif.style.opacity = "1";
  } else {
    audioElement.pause();
    masterPlay.classList.remove("bx-stop-circle");
    masterPlay.classList.add("bx-play-circle");
    gif.style.opacity = "0";
  }
});

//Listen to Events
myProgressBar.addEventListener("timeupdate", () => {
  console.log("timeupdate");

  //up
});
