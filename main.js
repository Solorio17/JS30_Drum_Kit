function playSound(d){
  const audio = document.querySelector(`audio[data-key="${d.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${d.keyCode}"]`);
  if(!audio) return;// stop the function from running all together
  audio.currentTime =0; // rewinds the audio to beginning, if pressed repeatedly
  audio.play();
  key.classList.add("playing");
}

function removeTransition(d){
  if(d.propertyName !== "transform") return; //skip if no transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound)
