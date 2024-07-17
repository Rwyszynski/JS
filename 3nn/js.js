userName = document.querySelector('#username')
pass = document.querySelector('#password')
pass2 = document.querySelector('#password2')
email = document.querySelector('#email')
clearBtn = document.querySelector('.clear')
sendBtn = document.querySelector('.send')
error_text = document.querySelector('.error-text')
popup = document.querySelector('.popup')


const showError = (input, msg) => {
    const par = input.parentElement;
    // par.style.color = 'red';
    const errorMsg = par.querySelector('.error-text')
    // error_text.style.display = 'visible'
    par.classList.add('error')
}





const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {

            showError(el, el.placeholder)
        }
    })

}

sendBtn.addEventListener('click', e => {
    e.preventDefault()

    checkForm([userName, pass, pass2, email])
})




const clear = e => {
    e.preventDefault();

    [userName, pass, pass2, email].forEach(el => {
        el.value = ''
    });
}
// 1. sprawdzenie czy wypełnione
// 2. bład to pole jest puste
// 3. skasuj błąd

clearBtn.addEventListener('click', clear)
