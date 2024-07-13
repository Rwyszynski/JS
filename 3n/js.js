const names = document.querySelector('.name')
const password = document.querySelector('.pass')
const password2 = document.querySelector('.pass2')
const email = document.querySelector('.emaili')
const error = document.querySelector('.user_error')

const clear = document.querySelector('#clear')
const send = document.querySelector('.send')



const showError = (input) => {

    const formBox = input.parentElement;
    const formBox2 = input.nextElementSibling;
    const give = formBox.querySelector('.user_error')

    formBox2.classList.remove('user_error')


}




const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, el.placeholder)
        }
    });
}

send.addEventListener('click', e => {
    e.preventDefault()

    checkForm([names, password, password2, email])

})




clear.addEventListener('click', e => {
    e.preventDefault()

    names.value = ''
    list = [names, password, password2, email]
    list.forEach(el => {
        el.value = ''
    });
})
