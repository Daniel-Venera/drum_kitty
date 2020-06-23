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

keys.forEach(a=>
  a.addEventListener('click', function (e) {
  const audioClick = document.querySelector(`audio[data-key="${e.target.id}"]`)
  const keyClick = e.target
  log(keyClick)
  audioClick.currentTime = 0
  audioClick.play()
  keyClick.classList.add('playing')
}))