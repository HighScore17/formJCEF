document.querySelector("#submit").addEventListener("click", function() {
  let nombre = document.querySelector("#nombre").value;
  let correo = document.querySelector("#correo").value;
  let password = document.querySelector("#pass").value;
  let fecha = document.querySelector("#fecha").value;
  let hora = document.querySelector("#hora").value;
  let tutor = document.querySelector("#tutor").value;
  let servicio = document.querySelector("#servicio").value;

  let url =
    "https://api.whatsapp.com/send?phone=529141131162&text=*_Jovenes Construyendo_*%0A*Datos*%0A%0A*¿Cual es tu nombre?*%0A" +
    nombre +
    "%0A*Correo*%0A" +
    correo +
    "%0A*Contraseña*%0A" +
    password +
    "%0A*Fecha*%0A" +
    fecha +
    "%0A*Indica la hora*%0A" +
    hora +
    "%0A*Tutor*%0A" +
    tutor +
    "%0A*¿Cual es el tu actividad principal*%0A" +
    servicio;
  window.open(url);
});
