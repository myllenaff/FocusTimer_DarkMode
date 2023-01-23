export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonLight,
  buttonDark,
  forestRange,
  rainRange,
  coffeeRange,
  fireRange,
  controlsDiv,
  timerText,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFire,
}) {
  
  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  function light() {
    buttonLight.classList.add('hide')
    buttonDark.classList.remove('hide')
    document.body.classList.add('darkMode')
    forestRange.classList.add('darkMode')
    rainRange.classList.add('darkMode')
    coffeeRange.classList.add('darkMode')
    fireRange.classList.add('darkMode')
    controlsDiv.classList.add('darkMode')
    timerText.classList.add('darkMode')
    buttonForest.classList.add('darkMode')
    buttonRain.classList.add('darkMode')
    buttonCoffeeShop.classList.add('darkMode')
    buttonFire.classList.add('darkMode')
  }

  function dark() {
    buttonDark.classList.add('hide')
    buttonLight.classList.remove('hide')
    document.body.classList.remove('darkMode')
    forestRange.classList.remove('darkMode')
    rainRange.classList.remove('darkMode')
    coffeeRange.classList.remove('darkMode')
    fireRange.classList.remove('darkMode')
    controlsDiv.classList.remove('darkMode')
    timerText.classList.remove('darkMode')
    buttonForest.classList.remove('darkMode')
    buttonRain.classList.remove('darkMode')
    buttonCoffeeShop.classList.remove('darkMode')
    buttonFire.classList.remove('darkMode')
  }

  return {
    reset,
    play,
    pause,
    light,
    dark,
    getMinutes
  }
}
