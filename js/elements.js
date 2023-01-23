// Controls buttons
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonAddTime = document.querySelector('.addTime')
const buttonSubTime = document.querySelector('.subTime')

// Music buttons
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeeShop')
const buttonFire = document.querySelector('.fireplace')

// Timer
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

// Theme
const buttonLight = document.querySelector('.light')
const buttonDark = document.querySelector('.dark')

// Range inputs
const forestRange = document.querySelector('#forestRange')
const rainRange = document.querySelector('#rainRange')
const coffeeRange = document.querySelector('#coffeeRange')
const fireRange = document.querySelector('#fireRange')

const controlsDiv = document.querySelector("#controls")
const timerText = document.querySelector("#timer")


export {  
  buttonPlay,
  buttonPause, 
  buttonSet,
  buttonStop,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFire,
  buttonAddTime,
  buttonSubTime,
  minutesDisplay,
  secondsDisplay,
  buttonLight,
  buttonDark,
  forestRange,
  rainRange,
  coffeeRange,
  fireRange,
  controlsDiv,
  timerText,
}