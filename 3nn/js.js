userName = document.querySelector('#username')
pass = document.querySelector('#password')
pass2 = document.querySelector('#password2')
email = document.querySelector('#email')
clearBtn = document.querySelector('.clear')
sendBtn = document.querySelector('.send')
error_text = document.querySelector('.error-text')
popup = document.querySelector('.popup')


const checkLength = (names, min) => {
    if (names.value.length < min) {
        const pum = names.parentElement
        console.log(pum)
        pum.classList.add('error');
        const neks = names.nextElementSibling

    }
}

const clear = (input) => {
    const neks = input.nextElementSibling

}

const empty = (input, msg) => {
    if (input.value === '') {

        const neks = input.nextElementSibling
        neks.style.visibility = "visible"
        neks.textContent = msg


    } else {
        clear(input)
    }
}


sendBtn.addEventListener('click', e => {
    e.preventDefault();

    [userName, pass, pass2, email].forEach(el => {
        empty(el, el.placeholder)

    });

    checkLength(userName, 3)
})



clearBtn.addEventListener('click', e => {
    e.preventDefault();

    [userName, pass, pass2, email].forEach(el => {
        el.value = ''
    })
})

// 1.sprawdzanie czy wypeł
// 2. to pole puste
// 3. skasuj bład