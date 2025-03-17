document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const apellidos = event.target.apellidos.value;
  const email = event.target.email.value;
  const terms = event.target.terms.checked;
  const estacion = event.target.estacion.value;
  const info = event.target.info.value;
  document.getElementById("contact").innerHTML = ""
  let error = "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length > 3 && name.length < 15) {
  } else {
    alert((error += "Nombre inválido\n"));
  }
  if (apellidos.length > 3 && apellidos.length < 30) {
  } else {
    alert((error += "Apellido inválido\n"));
  }
  if (emailRegex.test(email)) {
  } else {
    alert((error += "Formato email incorrecto\n"));
  }
  if (estacion == "") {
    error += "Selecciona alguna estación del año\n";
  }
  if (info == "") {
    alert((error = "Selecciona publicidad"));
  }
  if (!terms) {
    alert((error = "Acepta terminos y condiciones"));
  }
  
  // Comprobar si hay errores
  if (error.length != 0) {
    alert(error); //imprime mensaje final de error
    //document.body.innerHTML += error;
    let p = document.createElement("pre");
    let mensaje = document.createTextNode(error);
    p.style.color = "#DD1C1A";
    p.style.fontSize = "16px";
    p.appendChild(mensaje);

    document.getElementById("contact").appendChild(p); // dibuja resultado
  } else {
    //Enviar formulario
    //document.querySelector("form").submit();
    alert("Formulario enviado con éxito");
    event.target.submit();
  }
});
