let formUsername = document.getElementById('formUsername');
let formPassword = document.getElementById('formPassword');
let btnForm = document.getElementById('btnForm');
let arrayUser = [{}]

localStorage.getItem('dbUser') === null ? localStorage.setItem('dbUser', JSON.stringify([])) : null;

//Registrar Usuarios en la base de datos
let formUsernameRegister = document.getElementById('formUsernameRegister')
let formPasswordRegister = document.getElementById('formPasswordRegister')
let btnFormRegister = document.getElementById('btnFormRegister')

btnFormRegister.addEventListener('click', (e) =>{
    e.preventDefault();
    let usernameRegister = formUsernameRegister.value; 
    let passwordRegister = formPasswordRegister.value; 

    let Users = {
        username: usernameRegister,
        password: passwordRegister
    }

    let arrayDbUser = localStorage.getItem('dbUser')
    let arrayDbUserParse = JSON.parse(arrayDbUser)
    arrayDbUserParse.push(Users)

    let arrayDbUserStrinfy = JSON.stringify(arrayDbUserParse)
    localStorage.setItem('dbUser', arrayDbUserStrinfy)
})


//-------------------------------------------------------------------
btnForm.addEventListener('click', (e) =>{
    e.preventDefault()

    let username = formUsername.value;
    let password = formPassword.value;

    if(username === '' || password===''){
        let alerLogin = document.getElementById('alertLogin')
        alerLogin.classList.remove('d-none')
    }else {

        window.location.href = 'control.html'
    }
    formUsername.value = '';
    formPassword.value = '';


})











