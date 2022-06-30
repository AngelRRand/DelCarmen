const singUp = document.getElementById('sign-up'),
singIn = document.getElementById('sign-in'),
loginIn = document.getElementById('login-in'),
loginUp = document.getElementById('login-up');

singUp.addEventListener('click', ()=>{
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')


    loginIn.classList.add('none')
    loginUp.classList.add('block')
})


singIn.addEventListener('click', ()=>{
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')


    loginIn.classList.add('block')
    loginUp.classList.add('none')
})