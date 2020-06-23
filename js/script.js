let log = console.log
window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  if (!audio) {
    return;
  }
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
})

function removeTransition(e) {
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key =>
  key.addEventListener('transitionend', removeTransition));

