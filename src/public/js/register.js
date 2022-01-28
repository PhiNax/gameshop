window.addEventListener("load", function () {
  let registerFormulario = document.querySelector(".register-form");
  registerFormulario.addEventListener("submit", function (e) {
    let errors = [];

    let firstName = document.querySelector(".first-name");

    if (firstName.value == "") {
      errors.push("Complete your name");
    } else if (firstName.value.length < 2) {
      errors.push("Your name must have at least 2 characters");
    }

    let nickName = document.querySelector(".nickName");
    if (nickName.value == "") {
      errors.push("Complete your nickname");
    } else if (nickName.value.length < 3) {
      errors.push("Your nickname must have at least 3 characters");
    }

    let registerEmail = document.querySelector(".registerEmail");
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (registerEmail.value == "") {
      errors.push("Complete your email");
    } else if (re == null) {
      errors.push("Your email must be valid");
    }

    let registerPassword = document.querySelector(".registerPassword");
    if (registerPassword.value == "") {
      errors.push("Complete your password");
    } else if (registerPassword.value.length < 8) {
      errors.push("Your password must have at least 8 characters");
    }

    if (errors.length > 0) {
      e.preventDefault();
      let ulErrors = document.querySelector("div.erroresRegister ul");
      for (let i = 0; i < ulErrors.length; i++) {
        ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
      }
    }
  });
});
