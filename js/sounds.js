export default function () {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  const rain = new Audio('https://github.com/myllenaff/FocusTimer_desafio01/blob/master/assets/Chuva.wav?raw=true')
  const coffeeShop = new Audio('https://github.com/myllenaff/FocusTimer_desafio01/blob/master/assets/Cafeteria.wav?raw=true')
  const forest = new Audio('https://github.com/myllenaff/FocusTimer_desafio01/blob/master/assets/Floresta.wav?raw=true')
  const fireplace = new Audio('https://github.com/myllenaff/FocusTimer_desafio01/blob/master/assets/Lareira.wav?raw=true')

  rain.loop = true
  coffeeShop.loop = true
  forest.loop = true
  fireplace.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function stopMusic() {
    buttonPressAudio.play()
    rain.pause()
    coffeeShop.pause()
    forest.pause()
    fireplace.pause()
  }

  function timeEnd() {
    kitchenTimer.play()
    rain.pause()
    coffeeShop.pause()
    forest.pause()
    fireplace.pause()
  }

  return {
    pressButton,
    stopMusic,
    rain,
    forest,
    fireplace,
    coffeeShop,
    timeEnd
  }
}
