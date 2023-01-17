import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
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
  secondsDisplay
} from "./elements.js"


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
  buttonFire
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})
