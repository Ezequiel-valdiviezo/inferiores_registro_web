<?php
$phoneNumber = "541137624887"; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
$message = "Hola, estoy interesado en más información sobre el entrenamiento en Gintita."; // Mensaje personalizado

// Codifica el mensaje para URL
$encodedMessage = urlencode($message);

// Construye la URL de WhatsApp
$whatsappUrl = "https://wa.me/{$phoneNumber}?text={$encodedMessage}";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="./estilos/index.css">
</head>
<body>
<div class='fondo'>

<div class="containerMio bg-white">

<nav class="navbar navbar-expand-lg">
            <div class="container-fluid d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <a class="navbar-brand" href="#">
                        <img src="./img/logopng.webp" alt="Bootstrap" width="100"/>
                    </a>
                    <div class="vertical-line"></div>
                    <p class="gintitaTitulo"><span id="somos">Somos</span><br />Gintita</p>
                </div>

                <div class="d-flex justify-content-center flex-grow-1">
                <button class="navbar-toggler lineas bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-lg-0 mx-auto d-flex align-items-center">
                        <li class="nav-item">
                            <a class="nav-link active text-white fw-bold" aria-current="page" href="#inicio">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white fw-bold" aria-current="page" href="#nosotros">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white fw-bold" href="#novedades">Novedades</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white fw-bold" href="#contacto" aria-disabled="true">Contacto</a>
                        </li>
                        </ul>
                    </div>
                </div>

                <div class="d-flex align-items-center d-none d-sm-block">
                    <!-- <p class="seguinos">Seguínos</p> -->
                    <a href="https://www.instagram.com/gintita/">
                        <img class="redSocial" src="./img/instagram1.webp" alt="instagram" width="45" />
                    </a>
                    <a href="https://www.facebook.com/p/Gintita-100075855941475/">
                        <img class="redSocial" src="./img/facebook1.webp" alt="facebook" width="45" />
                    </a>
                    <a href="https://www.youtube.com/@danielcabrera1811">
                        <img class="redSocial" src="./img/youtube1.webp" alt="youtube" width="45" />
                    </a>
                </div>
            </div>
        </nav>

  <div class="seccion1" id='inicio'>
    <div class="d-flex flex-column align-items-center justify-content-center contenido">
      <p class='text-white text-center font-size-5 fw-bold fs-1 gintitaProyecto'>Gintita un proyecto hecho realidad</p>
      <img src="./img/logopng.webp" alt="Bootstrap" width="130"/>
    </div>
  </div>
  
  <div class="seccion2 text-center" id='nosotros'>
      <!-- <h2 class='tituloh2'>Gintita</h2>  -->
      <div class='mt-5 px-5'>
        <p class='fs-5'>Somos un centro de capacitación y formación de jugadores. Los entrenamos y preparamos para salida a AFA y mejorar su rendimiento.</p>
        <p class='fs-5'>Creado el 18 de octubre del 2020, por Daniel Cabrera, director técnico y coaching deportivo.</p>
        <button>
        <a href="<?php echo $whatsappUrl; ?>" class="text-decoration-none text-black" target="_blank">
            Contacto
        </a>
        </button>
        <p class='text-danger mt-2'>*Los entrenamientos se realizan por la mañana</p>
      </div>
  </div>

      <div class='text-center m-auto'>
        <h2 class='tituloh2 my-5'>Nuestros conceptos</h2>
        <div class='container'>
<div class='row'>
<div class='col-12 col-md-6 col-lg-4 mb-4 text-center m-auto'>
  <div class='conceptosImg'>
    <img src="./img/entrenar.webp" alt="Entrenar" class='img-fluid' />
  </div>
</div>
<div class='col-12 col-md-6 col-lg-4 mb-4 text-center m-auto'>
  <div class='conceptosImg'>
    <img  src="./img/disfrutar.webp" alt="Disfrutar" class='img-fluid' />
  </div>
</div>
<div class='col-12 col-md-6 col-lg-4 mb-4 text-center m-auto'>
  <div class='conceptosImg'>
    <img  src="./img/transformar.webp" alt="Transformar" class='img-fluid' />
  </div>
</div>
</div>
<div class='row mt-4'>
<div class='col-12 col-md-6 col-lg-4 mb-4 text-center m-auto'>
  <div class='conceptosImg'>
    <img  src="./img/motivar.webp" alt="Motivar" class='img-fluid' />
  </div>
</div>
<div class='col-12 col-md-6 col-lg-4 mb-4 text-center m-auto'>
  <div class='conceptosImg'>
    <img src="./img/alcanzar.webp" alt="Alcanzar" class='img-fluid' />
  </div>
</div>
<div class='col-12 col-md-6 col-lg-4 mb-4 text-center m-auto'>
  <div class='conceptosImg'>
    <img  src="./img/evolucionar.webp" alt="Evolucionar" class='img-fluid' />
  </div>
</div>
</div>
</div>

      </div>

    <div class="seccion4 text-center mt-5 pt-5 mb-5">
      <iframe width="80%" height="450" src="https://www.youtube.com/embed/0T7TsrUGB9k?si=LYbnzNGhmLpZdU53" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class='row flex-wrap px-2 mt-5 entrenamiento m-auto'>
        <h2 class='tituloh2 text-center'>Entrenamiento</h2>
    <div class='text-center col-md-6 m-auto'>
      <ul class="list-unstyled text-start entrenamientoLista mx-auto">
        <li class='my-2 '>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-3 bi bi-clock-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
        </svg>
          Lunes a viernes de 8:30 a 10:30
        </li>
        <li class='my-2 '>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-3 bi bi-cloud-drizzle-fill" viewBox="0 0 16 16">
        <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973"/>
      </svg>
          Se suspende por lluvia
        </li>
        <li class='my-2 '>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-3 bi bi-cone" viewBox="0 0 16 16">
        <path d="M7.03 1.88c.252-1.01 1.688-1.01 1.94 0l2.905 11.62H14a.5.5 0 0 1 0 1H2a.5.5 0 0 1 0-1h2.125z"/>
      </svg>
          Predio los Japoneses
        </li>
        <li class='my-2 '>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-3 bi bi-telephone-plus-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5"/>
      </svg>
          Contacto: 11 3762-4887
        </li>
      </ul>
    </div>
    <div class='text-center col-md-6'>
        <!-- <h2 class='tituloh2 mt-5'>Nuestra ubicación</h2> -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.1374213731647!2d-58.460575724940966!3d-34.65123226000787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbd9854d4433%3A0x77df4df10250dd61!2sClub%20de%20la%20Asociaci%C3%B3n%20Japonesa!5e0!3m2!1ses-419!2sar!4v1724607462369!5m2!1ses-419!2sar"
         max-width="350" 
         height="280" 
         style="border:0;" 
         allowfullscreen="" 
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade">
        </iframe>

    </div>
  </div>
  

  <div class="seccion3 text-white text-center py-5 my-5">
    <h2 class='fs-4'>Coordinador</h2>
    <p class='fs-3 dc'>Daniel Cabrera</p>
    <button>
        <a href="<?php echo $whatsappUrl; ?>" class="text-decoration-none text-white" target="_blank">
            Contacto
        </a>
    </button>
  </div>

  <div class="text-center" id="novedades">
            <h2 class='tituloh2'>Noticias</h2>
            <div class="d-flex flex-wrap justify-content-center">
                    <div class="card mx-2 my-2" style="width: 18rem" key="index">
                        <img src="./img/pintita.webp" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Noticia</h5>
                            <button
                                class="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#noticiaModal"
                                onclick="openModal('Noticia', './img/pintita.webp', 'Descripción de la noticia aquí.')"
                            >
                                Leer más
                            </button>
                        </div>
                    </div>
            </div>
        </div>

        <!-- Modal -->
<div class="modal fade" id="noticiaModal" tabindex="-1" aria-labelledby="noticiaModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="noticiaModalLabel">Título de la Noticia</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="" id="modalImage" class="img-fluid mb-3" alt="">
        <p id="modalDescription">Descripción de la noticia</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>



  <div class="seccion5 py-5 d-flex flex-column justify-content-center align-items-center mt-5">
    <div>
      <p id='somosgintita'>#SOMOSGINTITA</p>
    </div>
    <div class="d-flex align-items-center ">
      <!-- <p class="seguinos">Seguínos</p> -->
      <a href="https://www.instagram.com/gintita/">
        <img class="redSocial mx-2" src="./img/instagram1.webp" alt="instagram" width="50" />
      </a>
      <a href="https://www.facebook.com/p/Gintita-100075855941475/">
        <img class="redSocial mx-2" src="./img/facebook1.webp" alt="instagram" width="50" />
      </a>
      <a href="https://www.youtube.com/@danielcabrera1811">
         <img class="redSocial mx-2" src="./img/youtube1.webp" alt="instagram" width="50" />
      </a>
    </div>
  </div>

  <footer class="bg-black d-flex flex-column justify-content-center align-items-center pt-5">
            <div>
                <img width="125" src="./img/logopng.webp" alt="Logo Gintita" 
                class=""/>
            </div>
            <div>
                <p class="text-white text-center py-4">@Sitio Oficial del Club Gintita. Todos los derechos reservados.</p>
                <a class="" href="./login.php">.</a>
            </div>
    </footer>
</div>

</div>

<script>
function openModal(title, imageSrc, description) {
    document.getElementById('noticiaModalLabel').textContent = title;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalDescription').textContent = description;
}
</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>