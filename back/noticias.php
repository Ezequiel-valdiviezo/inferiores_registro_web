<?php
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: index.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Bienvenido</title>
    <link rel="stylesheet" href="./estilos/home.css">
</head>
<body>
    <div class="container text-center pt-3">
        <div class="mb-3">
            <img src="./img/logopng.webp" width="150px" alt="">
        </div>
        <a href="./actions/logout.php" class="boton">Cerrar sesión</a>
        <a href="./home.php" class="boton">Volver atrás</a>
        <h1 class="text-white mt-4">Crear Noticia</h1>

        <form action="./actions/upload.php" method="POST" enctype="multipart/form-data" class="py-4">
            <div class="mb-3">
                <label for="titulo" class="form-label text-white">Título</label>
                <input type="text" class="form-control" id="titulo" name="titulo" required>
            </div>
            <div class="mb-3">
                <label for="descripcion" class="form-label text-white">Descripción</label>
                <textarea class="form-control" id="descripcion" name="descripcion" rows="4" required></textarea>
            </div>
            <div class="mb-3">
                <label for="imagen" class="form-label text-white">Subir Imagen</label>
                <input type="file" class="form-control" id="imagen" name="imagen" accept="image/*" required>
            </div>
            <button type="submit" class="btn btn-primary">Subir</button>
        </form>

    </div>
</body>
</html>
