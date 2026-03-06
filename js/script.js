// 🔹 CONTENIDOS MODAL
const textosModal = [
  "<h3>Nivel Inicial</h3><p>En nuestro Nivel Inicial, los más pequeños se inician en el mundo del aprendizaje con propuestas lúdicas, creativas y afectivas. Un espacio cálido donde aprenden a compartir, jugar y expresarse.</p>",
  "<h3>Nivel Primario</h3><p>Durante la primaria se consolidan las habilidades de lectura, escritura, matemáticas, ciencias y ciudadanía. Se estimula la curiosidad natural y la autonomía de cada alumno.</p>",
  "<h3>Nivel Secundario Técnico</h3><p>En esta etapa, los estudiantes pueden optar por tres orientaciones técnicas: Informática, Turismo o Maestro Mayor de Obra. Nuestra enseñanza los prepara tanto para el mundo laboral como para estudios superiores.</p>",
  "<h3>Actividades Extracurriculares</h3><p>La escuela ofrece talleres de robótica, fútbol, música, danza, viajes educativos, ferias de ciencia, juegos matemáticos y mucho más.</p>"
];

// 🔹 ARCHIVOS DEL CARRUSEL
const imagenes = [
  "/images/galeria1.mp4",
  "/images/escuela.webp",
  "/images/galeria2.jpg",
  "/images/escuela2.jpg",
];

let idx = 0;
let intervaloCarrusel;
let reproduciendoVideo = false;

// 🔹 CAMBIO DE IMAGEN/VIDEO
function cambiarImagen(dir) {
  idx = (idx + dir + imagenes.length) % imagenes.length;
  actualizarCarrusel();
  reiniciarIntervalo();
}

// 🔹 ACTUALIZAR VISUAL DEL CARRUSEL
function actualizarCarrusel() {
  const imgCarrusel = document.getElementById("imagen-carrusel");
  const videoCarrusel = document.getElementById("video-carrusel");
  const actual = imagenes[idx];

  imgCarrusel.style.display = "none";
  videoCarrusel.style.display = "none";
  videoCarrusel.pause();
  videoCarrusel.currentTime = 0;

  if (actual.endsWith(".mp4")) {
    videoCarrusel.src = actual;
    videoCarrusel.style.display = "block";
    videoCarrusel.play();
    reproduciendoVideo = true;

    videoCarrusel.onended = () => {
      reproduciendoVideo = false;
      cambiarImagen(1);
    };
  } else {
    imgCarrusel.src = actual;
    imgCarrusel.style.display = "block";
    reproduciendoVideo = false;
  }

  document.querySelectorAll("#indicadores span").forEach((dot, i) => {
    dot.classList.toggle("activo", i === idx);
  });
}

// 🔹 INDICADORES
function crearIndicadores() {
  const cont = document.getElementById("indicadores");
  cont.innerHTML = "";
  imagenes.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.onclick = () => {
      idx = i;
      actualizarCarrusel();
      reiniciarIntervalo();
    };
    cont.appendChild(dot);
  });
}

// 🔹 AUTO CARRUSEL
function iniciarCarruselAutomatico() {
  clearInterval(intervaloCarrusel);
  intervaloCarrusel = setInterval(() => {
    if (!reproduciendoVideo) {
      idx = (idx + 1) % imagenes.length;
      actualizarCarrusel();
    }
  }, 4000);
}

function reiniciarIntervalo() {
  clearInterval(intervaloCarrusel);
  iniciarCarruselAutomatico();
}

// 🔹 FORMULARIO, TESTIMONIOS, ETC. (mantengo lo tuyo original)
const noticias = [
  "<h3>Feria de Ciencias 2025</h3><p>Con más de 30 proyectos innovadores, nuestra Feria de Ciencias fue un evento destacado. Alumnos de todas las orientaciones demostraron su creatividad, conocimientos y compromiso.</p>",
  "<h3>Viaje a Bariloche</h3><p>Los alumnos de Turismo visitaron parques nacionales, centros turísticos y realizaron prácticas reales de guiado. Una experiencia educativa y personal inolvidable.</p>"
];

const testimonios = [
  "“Gracias a la escuela aprendí a programar y hoy estoy estudiando Ingeniería en Sistemas.” – Adam Montenegro, exalumno.",
  "“Mis hijos se sienten felices y motivados todos los días. La calidad humana es excelente.” – María, mamá de 2 alumnos.",
  "“La orientación en Turismo me permitió trabajar en una agencia antes de terminar el colegio.” – Milena, 7°3 año.",
  "“La escuela no solo enseña, también acompaña. ¡Nos sentimos parte de una gran familia!” – Profe Iván Gamarra",
];

// 🔹 ARRANQUE AUTOMÁTICO
window.addEventListener("load", () => {
  crearIndicadores();
  actualizarCarrusel();
  iniciarCarruselAutomatico();
});

// 🔹 Función para cambiar pestañas (Información / Fotos)
function mostrarTab(boton, id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  boton.classList.add('active');
  document.getElementById(id).classList.add('active');
}



// 🔹 CARRUSEL TURISMO
let idxTurismo = 0;
const imagenesTurismo = ["imagen 5.jpeg", "imagen 2.jpeg", "imagen 3.jpeg"]; // agrega todas tus imágenes aquí

function cambiarImagenTurismo(dir) {
  idxTurismo = (idxTurismo + dir + imagenesTurismo.length) % imagenesTurismo.length;
  actualizarCarruselTurismo();
}

function actualizarCarruselTurismo() {
  const img = document.getElementById("imagen-carrusel-turismo");
  img.src = imagenesTurismo[idxTurismo];

  // Indicadores
  const indicadores = document.getElementById("indicadores-turismo");
  indicadores.innerHTML = imagenesTurismo.map((_, i) =>
    `<span class="${i === idxTurismo ? 'activo' : ''}" style="height:10px;width:10px;margin:0 5px;display:inline-block;background-color:${i===idxTurismo?'#333':'#ccc'};border-radius:50%;"></span>`
  ).join('');
}

// Auto-skip cada 4 segundos
setInterval(() => cambiarImagenTurismo(1), 4000);

// Inicializar
window.addEventListener("load", actualizarCarruselTurismo);




  


const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let particles = [];
for(let i=0;i<200;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2+1,
    dx: (Math.random()-0.5)*1.2,
    dy: (Math.random()-0.5)*1.2
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const grad = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
  grad.addColorStop(0,"#001f3f");
  grad.addColorStop(1,"#004080");
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  for(let p of particles){
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if(p.x<0)p.x=canvas.width;
    if(p.x>canvas.width)p.x=0;
    if(p.y<0)p.y=canvas.height;
    if(p.y>canvas.height)p.y=0;
  }

  requestAnimationFrame(draw);
}
draw();





document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("error-msg");

    const demoEmail = "admin@admin.com";
    const demoPass  = "123456";

    if (email === demoEmail && password === demoPass) {
        localStorage.setItem("session_token", "TOKEN123");
        window.location.href = "go.html";
    } else {
        errorMsg.textContent = "Datos incorrectos.";
    }
});








// Escena básica Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('lobbyCanvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Fondo dinámico (color degradado o cielo)
scene.background = new THREE.Color(0x0a0f2b);

// Luz
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Cargar tu modelo 3D (ejemplo GLTF)
const loader = new THREE.GLTFLoader();
loader.load('estudiante.glb', function(gltf) {
  const model = gltf.scene;
  model.position.set(0, -1.5, 0);
  model.scale.set(1.5, 1.5, 1.5);
  scene.add(model);

  // Animación simple de rotación del personaje
  function animate() {
    requestAnimationFrame(animate);
    model.rotation.y += 0.005; // giro suave
    renderer.render(scene, camera);
  }
  animate();
}, undefined, function(error) {
  console.error(error);
});

// Posición cámara
camera.position.z = 5;

// Ajuste de pantalla
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Interacción botón
document.getElementById('enterButton').addEventListener('click', () => {
  alert("¡Ingresando al sitio!");
});









document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    // Validación básica de login (esto es solo un ejemplo, en producción deberías validar con tu backend)
    if (usuario === "usuario@ejemplo.com" && password === "password123") {
        alert("Inicio de sesión exitoso.");
        window.location.href = "panel_usuario.html";  // Redirigir al panel de usuario
    } else {
        document.getElementById("loginError").style.display = "block";
    }
});






// Script de Google SignIn (solo si usas la autenticación de Google)
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId());
    console.log("Name: " + profile.getName());
    console.log("Email: " + profile.getEmail());
    // Aquí puedes hacer algo con la información, como redirigir al usuario o mostrar un mensaje.
    // Ejemplo: redirigir al panel de usuario
    window.location.href = "panel_usuario.html";  // Ajusta la URL según tu aplicación
}





