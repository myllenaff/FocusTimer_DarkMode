import Controls from './controls.js'
import Timer from './timer.js'
import Cafe from './sounds.js'
import Events from './events.js'
import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonAddTime,
  buttonSubTime,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFire,
  minutesDisplay,
  secondsDisplay,
  buttonLight,
  buttonDark,
  forestRange,
  rainRange,
  coffeeRange,
  fireRange,
  controlsDiv,
  timerText
} from './elements.js'

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonAddTime,
  buttonSubTime,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFire,
  buttonLight,
  buttonDark,
  forestRange,
  rainRange,
  coffeeRange,
  fireRange,
  controlsDiv,
  timerText
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Cafe()

Events({ controls, timer, sound, theme })
