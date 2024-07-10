const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const btn = document.querySelector('.count')
const error = document.querySelector('.error')
const info = document.querySelector('.cost-info');

const count = () => {
    const end = price.value * people.value
    info.textContent = end
}

btn.addEventListener('click', count)