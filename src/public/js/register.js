window.onload = () => {
  //Function to display errors under inputs
  function lierr(prop, msg) {
    return prop.innerHTML += '<li class="form__errors"><i class="fas fa-exclamation-triangle form__alert"></i>' + msg + '</li>';
  }

  // RegExp
  const emailRegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

  // Select ul errors classes
  const fnerr = document.querySelector('.fn-errors');
  const lnerr = document.querySelector('.ln-errors');
  const eerr = document.querySelector('.e-errors');
  const perr = document.querySelector('.pass-errors');
  const pcerr = document.querySelector('.passc-errors');

  // Select inputs from form
  const firstName = document.getElementById('firstname');
  const lastName = document.getElementById('lastname');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const passwordC = document.getElementById('passwordC');

  // Check inputs validity
  firstName.addEventListener('blur', () => {
    if (firstName.value == "") {
      lierr(fnerr, 'Complete your name');
    } else if (firstName.value.length < 3) {
      lierr(fnerr, 'Your name must have at least 3 characters');
    }
  })

  lastName.addEventListener('blur', () => {
    if (lastName.value == "") {
      lierr(lnerr, 'Complete your lastname');
    } else if (lastName.value.length < 3) {
      lierr(lnerr, 'Your lastname must have at least 3 characters');
    }
  })

  email.addEventListener('blur', () => {
    if (email.value == "") {
      lierr(eerr, 'Complete your email');
    } else if (!email.value.match(emailRegExp))
      lierr(eerr, 'Enter a valid email');
  })

  password.addEventListener('blur', () => {
    if (password.value == "") {
      lierr(perr, 'Password cannot be empty');
    } else if (password.value.length < 8) {
      lierr(perr, 'Password must have at least 8 characters');
    }
  })

  passwordC.addEventListener('blur', () => {
    if (passwordC.value == "") {
      lierr(pcerr, 'Password cannot be empty');
    } else if (passwordC.value.length < 8) {
      lierr(pcerr, 'Password must have at least 8 characters');
    } else if (password.value !== passwordC.value) {
      lierr(pcerr, 'Passwords do not match');
    }
  })
  /*setTimeout(() => {
    fnerr.;
  }, 5000);*/

};
