import { modal } from './modal.js'
import { AlertError } from './alert-error.js'
import {calculateImc, notNumber} from './utils.js'

const form = document.querySelector("form")
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => {AlertError.close()}
inputHeight.oninput = () => {AlertError.close()} 

form.onsubmit = function(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrheightIsNotANumber = notNumber(weight) || notNumber(height)

  if(weightOrheightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateImc(weight, height)
  const message = `${result}`

  modal.message.innerText = message
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `${result}`

  modal.message.innerText = message
  modal.open()
}