import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonAddTime,
  buttonSubTime,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFire,
  minutesDisplay,
  buttonLight,
  buttonDark
} from './elements.js'

export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  buttonForest.addEventListener('click', function (e) {
    if (e.target.tagName == 'INPUT') {
      sound.forest.volume = e.target.value /100
      
      return
    } else {
      buttonRain.classList.remove('active')
      buttonCoffeeShop.classList.remove('active')
      buttonFire.classList.remove('active')
      sound.stopMusic()
      const isActive = buttonForest.classList.contains('active')

      if (isActive) {
        buttonForest.classList.remove('active')
        sound.forest.pause()
      } else {
        buttonForest.classList.add('active')
        sound.forest.play()
      }
    }
  })

  buttonRain.addEventListener('click', function (e) {
    if (e.target.tagName == 'INPUT') {
      sound.rain.volume = e.target.value / 100
      return
    } else {
      buttonForest.classList.remove('active')
      buttonCoffeeShop.classList.remove('active')
      buttonFire.classList.remove('active')
      sound.stopMusic()
      const isActive = buttonRain.classList.contains('active')

      if (isActive) {
        buttonRain.classList.remove('active')
        sound.rain.pause()
      } else {
        buttonRain.classList.add('active')
        sound.rain.play()
      }
    }
  })

  buttonCoffeeShop.addEventListener('click', function (e) {
    if (e.target.tagName == 'INPUT') {
      sound.coffeeShop.volume = e.target.value / 100
      return
    } else {
      buttonForest.classList.remove('active')
      buttonRain.classList.remove('active')
      buttonFire.classList.remove('active')
      sound.stopMusic()
      const isActive = buttonCoffeeShop.classList.contains('active')

      if (isActive) {
        buttonCoffeeShop.classList.remove('active')
        sound.coffeeShop.pause()
      } else {
        buttonCoffeeShop.classList.add('active')
        sound.coffeeShop.play()
      }
    }
  })

  buttonFire.addEventListener('click', function (e) {
    if (e.target.tagName == 'INPUT') {
      sound.fireplace.volume = e.target.value / 100
      return
    } else {
      buttonForest.classList.remove('active')
      buttonRain.classList.remove('active')
      buttonCoffeeShop.classList.remove('active')
      sound.stopMusic()
      const isActive = buttonFire.classList.contains('active')

      if (isActive) {
        buttonFire.classList.remove('active')
        sound.fireplace.pause()
      } else {
        buttonFire.classList.add('active')
        sound.fireplace.play()
      }
    }
  })

  buttonSet.addEventListener('click', function () {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  // Criar função que ao clicar em + atribua 5 minutos ao timer

  buttonAddTime.addEventListener('click', function () {
    if (Number(minutesDisplay.textContent) >= 55) {
      buttonAddTime.classList.add('disabled')

      return (minutesDisplay.textContent = String(60).padStart(2, '0'))
    }
    buttonSubTime.classList.remove('disabled')
    buttonAddTime.classList.remove('disabled')

    minutesDisplay.textContent = String(
      Number(minutesDisplay.textContent) + 5
    ).padStart(2, '0')
  })

  // // Criar função que ao clicar em - tire 5 minutos ao timer

  buttonSubTime.addEventListener('click', function () {
    if (Number(minutesDisplay.textContent) <= 5) {
      buttonSubTime.classList.add('disabled')

      return (minutesDisplay.textContent = String(0).padStart(2, '0'))
    }

    buttonAddTime.classList.remove('disabled')
    buttonSubTime.classList.remove('disabled')

    minutesDisplay.textContent = String(
      Number(minutesDisplay.textContent) - 5
    ).padStart(2, '0')
  })

  buttonLight.addEventListener('click', function () {
    controls.light()
  })

  buttonDark.addEventListener('click', function () {
    controls.dark()
  })
}
