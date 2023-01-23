export default function () {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  const rain = new Audio('./assets/Chuva.wav')
  const coffeeShop = new Audio('./assets/Cafeteria.wav')
  const forest = new Audio('./assets/Floresta.wav')
  const fireplace = new Audio('./assets/Lareira.wav')

  rain.volume = 0.5
  coffeeShop.volume = 0.5
  forest.volume = 0.5
  fireplace.volume = 0.5


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
    timeEnd,
   
  }
}
