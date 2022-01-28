window.addEventListener("load", function () {
  let productsFormulario = document.querySelector("main-form-create");
  productsFormulario.addEventListener("submit", function (e) {
    let errores = [];

    let productName = document.querySelector(".productName");

    if (productName.value == "") {
      errores.push("Complete your email");
    } else if (productName.value.length < 5) {
      errores.push("Your product name must have at least 5 characters");
    }

    let productDescription = document.querySelector(".productDescription");
    if (productDescription.value < 20) {
      errores.push("Your product name must have at least 20 characters");
    }

    let coverImage = document.querySelector(".coverImage");
    let validImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
    if (validImage == null) {
      errores.push("Your image is not valid");
    }

    if (errores.length > 0) {
      e.preventDefault();
      let ulerrores = document.querySelector(".producterrors");
      for (let i = 0; i < ulerrores.length; i++) {
        ulerrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});
