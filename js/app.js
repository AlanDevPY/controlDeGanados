let formUsername = document.getElementById("formUsername");
let formPassword = document.getElementById("formPassword");
let btnForm = document.getElementById("btnForm");
let arrayUser = [{}];

if (localStorage.getItem("dbUser")) {
  console.log("Base de datos encontrado");
} else {
  localStorage.setItem("dbUser", JSON.stringify([]));
}

//Registrar Usuarios en la base de datos
let formUsernameRegister = document.getElementById("formUsernameRegister");
let formPasswordRegister = document.getElementById("formPasswordRegister");
let btnFormRegister = document.getElementById("btnFormRegister");

btnFormRegister.addEventListener("click", (e) => {
  e.preventDefault();
  let usernameRegister = formUsernameRegister.value;
  let passwordRegister = formPasswordRegister.value;

  if (!(usernameRegister === "" || passwordRegister === "")) {
    // si los campos no estan vacios ejecuta este codigo

    let dbUser = JSON.parse(localStorage.getItem("dbUser"));
    let usernameBusqueda = usernameRegister;
    let passwordBusqueda = passwordRegister;

    let userEncontrado = dbUser.find(
      (user) =>
        user.username === usernameBusqueda && user.password === passwordBusqueda
    );

        if (userEncontrado) {
            let spanRegister = document.getElementById('spanRegister')
            let alertRegister = document.getElementById('alertRegister')
            spanRegister.textContent = 'El usuario ya existe'
            alertRegister.classList.remove('d-none')
            spanRegister.classList.remove('alert-danger')
            formUsernameRegister.value = "";
            formPasswordRegister.value = "";

        } else {
        let Users = { // creamo un objeto para agregar a nuestra base de datos
            username: usernameRegister,
            password: passwordRegister,
        };

        let dbUser = JSON.parse(localStorage.getItem("dbUser"));
        dbUser.push(Users);
        localStorage.setItem("dbUser", JSON.stringify(dbUser));

        formUsernameRegister.value = "";
        formPasswordRegister.value = "";

        let alertRegister = document.getElementById('alertRegister')
        let spanRegister = document.getElementById('spanRegister')

        spanRegister.textContent = 'Usuario Registrado - Puedes cerrar esta ventana'
        alertRegister.classList.remove('d-none')
        }

  } else {
    let alertRegister = document.getElementById("alertRegister");
    alertRegister.classList.remove("d-none");
    let spanRegister = document.getElementById('spanRegister')
    spanRegister.textContent = 'No puedes dejar en blanco'

    formUsernameRegister.value = "";
    formPasswordRegister.value = "";
  }

});

//LOGIN----------------------------------------------------
btnForm.addEventListener("click", (e) => {
  e.preventDefault();

  let username = formUsername.value;
  let password = formPassword.value;

  if (username === "" || password === "") {
    let alerLogin = document.getElementById("alertLogin");
    alerLogin.classList.remove("d-none");
  } else {
    window.location.href = "control.html";
  }
  formUsername.value = "";
  formPassword.value = "";
});
