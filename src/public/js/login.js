window.addEventListener("load", function () {
  let loginFormulario = document.querySelector(".login-form");
  loginFormulario.addEventListener("submit", function (e) {
    let errores = [];

    let emailValidation = document.querySelector(".emailValidation");
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailValidation.value == "") {
      errores.push("Complete your email");
    } else if (re == null) {
      errores.push("Your email must be valid");
    }

    let passwordValidation = document.querySelector(".passwordValidation");

    if (passwordValidation.value == "") {
      errores.push("Complete your password");
    } else if (passwordValidation.value.length < 8) {
      errores.push("Your password must have at least 8 characters");
    }
    if (errores.length > 0) {
      e.preventDefault();
      let ulErrores = document.querySelector("div.erroresLogin ul");
      for (let i = 0; i < ulErrores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});
