const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let fahrenheit
let celsius

const conTem = () => {
    fahrenheit = converter.value * 1.8 + 32
    result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)} °F`
}

convBtn.addEventListener('click', conTem);


const swap = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F'
        two.textContent = '°C'
    } else {
        one.textContent = '°C'
        two.textContent = '°F'
    }
}

changeBtn.addEventListener('click', swap)

const reset = () => {
    result.textContent = ''
    converter.value = ''
}

resetBtn.addEventListener('click', reset)