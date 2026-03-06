export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Solo servimos el HTML si la ruta es la raíz "/"
    if (url.pathname === "/" || url.pathname === "") {
      const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>E.E.S.T Nº3 "Islas Malvinas" - Entrada</title>
  <link rel="stylesheet" href="/css/montenegro.css">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    /* Estilos embebidos mínimos para asegurar que se vea algo si el CSS falla */
    body { font-family: 'Roboto', sans-serif; margin: 0; background: #000; color: white; }
    .header { text-align: center; padding: 50px; }
    .logo-img { max-width: 150px; border-radius: 50%; }
    .enter-btn { 
      display: inline-block; padding: 10px 20px; background: #007bff; 
      color: white; text-decoration: none; border-radius: 5px; margin-top: 20px; 
    }
  </style>
</head>
<body>
  <div class="container">
    <section class="parallax-section">
      <div class="parallax-layer" style="background-image: url('/images/escuela.webp');"></div>
    </section>

    <header class="header">
      <div class="logo-container">
        <img src="/images/0882f75f-4f80-41ea-84e8-32808b346a27.JPG" alt="Logo E.E.S.T Nº3" class="logo-img">
        <h1 class="site-title">E.E.S.T Nº3 "Islas Malvinas"</h1>
      </div>
      <p class="header-subtitle">Innovación, formación y compromiso</p>
      <a href="go.html" class="enter-btn">Ingresar</a>
    </header>
  </div>
  <script src="/js/script.js"></script>
</body>
</html>`;

      return new Response(html, {
        headers: { "Content-Type": "text/html; charset=UTF-8" },
      });
    }

    // Si pide cualquier otra cosa (CSS, imágenes, JS), intenta buscarlo
    // utilizamos el asset handler proporcionado por Workers Sites
    return env.ASSETS.fetch(request);
  },
};