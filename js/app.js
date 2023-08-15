let formUsername = document.getElementById('formUsername');
let formPassword = document.getElementById('formPassword');
let formBtn = document.getElementById('formBtn');

formBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    let username = formUsername.value;
    let passwrod = formPassword.value;
    console.log(username,passwrod);
})
