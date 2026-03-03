// ==============================
// PESTAÑAS - Maestro Mayor de Obras
// ==============================
function mostrarTabMMO(elemento, idContenido) {
  // Ocultar todas las pestañas
  const contenidos = document.querySelectorAll('.tab-content');
  contenidos.forEach(c => c.classList.remove('active'));

  // Desactivar todos los botones de pestañas
  const tabs = elemento.parentElement.querySelectorAll('.tab');
  tabs.forEach(t => t.classList.remove('active'));

  // Activar la pestaña clickeada
  document.getElementById(idContenido).classList.add('active');
  elemento.classList.add('active');
}

// ==============================
// CARRUSEL DE FOTOS - Maestro Mayor de Obras
// ==============================
let indiceMMO = 0;
const imagenesMMO = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  'construcciones1.jpeg',
  'construcciones2.jpeg',
];

function mostrarImagenMMO(indice) {
  const img = document.getElementById('imagen-carrusel-mmo');
  img.src = imagenesMMO[indice];

  // Actualizar indicadores
  const puntos = document.getElementById('indicadores-mmo');
  puntos.innerHTML = '';
  for (let i = 0; i < imagenesMMO.length; i++) {
    const span = document.createElement('span');
    span.textContent = '●';
    span.style.cursor = 'pointer';
    span.style.margin = '0 5px';
    span.style.color = i === indice ? 'black' : 'gray';
    span.onclick = () => {
      indiceMMO = i;
      mostrarImagenMMO(indiceMMO);
    };
    puntos.appendChild(span);
  }
}

// Cambiar imagen al hacer click en flechas
function cambiarImagenMMO(direccion) {
  indiceMMO += direccion;
  if (indiceMMO < 0) indiceMMO = imagenesMMO.length - 1;
  if (indiceMMO >= imagenesMMO.length) indiceMMO = 0;
  mostrarImagenMMO(indiceMMO);
}

// Inicializar carrusel al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  mostrarImagenMMO(indiceMMO);
});


// Función para manejar pestañas
function mostrarTabMMO(btn, tabId) {
  // Ocultar todos los tab-content
  const contenidos = document.querySelectorAll('.tab-content');
  contenidos.forEach(c => c.classList.remove('active'));

  // Quitar clase active a todos los botones
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(t => t.classList.remove('active'));

  // Mostrar contenido seleccionado
  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
}
