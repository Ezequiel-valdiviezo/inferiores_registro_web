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
    <link rel="stylesheet" href="../estilos/home.css">
</head>
<body>
    <div class="container text-center pt-3">
        <img src="../img/logopng.webp" width="150px" alt="">
        <h1 class="text-white">Bienvenido al panel administrador</h1>
        <p class="text-white">Has iniciado sesión con éxito.</p>
        <a href="./actions/logout.php" class="boton">Cerrar sesión</a>

        <div class="mt-5">
            <h2 class="text-white mb-3">Ver noticias</h2>
            <a class="boton" href="./noticiasAdmin.php">Ver</a>
        </div>

        <div class="mt-5">
            <h2 class="text-white mb-3">Crear noticia</h2>
            <a class="boton" href="./noticias.php">Crear</a>
        </div>
    </div>
</body>
</html>
