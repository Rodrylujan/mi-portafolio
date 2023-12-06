function enviarRecomendacion() {
  let nombre = document.getElementById("nombre-user").value;
  let recomendacion = document.getElementById("texto-recomendacion").value;

  if (recomendacion.trim() !== "") {
    if (nombre.trim() !== "") {
      nombre = nombre + ": ";
    }
    const nuevaRecomendacion = document.createElement("div");
    nuevaRecomendacion.classList.add("recomendacion");
    nuevaRecomendacion.textContent = nombre + recomendacion;

    const contenedorRecomendaciones = document.querySelector(
      ".contenedor-recomendaciones"
    );
    contenedorRecomendaciones.appendChild(nuevaRecomendacion);

    document.getElementById("formRecomendacion").reset();
    showPopup(true);
  } else {
    alert("Ingrese una recomendacion");
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById("popup").style.visibility = "visible";
  } else {
    document.getElementById("popup").style.visibility = "hidden";
  }
}
