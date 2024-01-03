// script.js
function changeButtonText(element) {
  // Guarda el texto original en un atributo de datos
  if (!element.dataset.originalText) {
    element.dataset.originalText = element.innerText;
  }

  // Cambia el texto del botón cuando el mouse está sobre él
  if (element.innerText === "Deployment") {
    element.innerText = "Not deployed"; // Cambia a tu nuevo texto
  }
}

function resetButtonText(element) {
  // Revierte al texto original cuando el mouse sale del botón
  element.innerText = element.dataset.originalText;
}
