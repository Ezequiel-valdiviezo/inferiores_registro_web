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
</head>
<body>
    <div class="container text-center">
        <h1>Bienvenido al panel administrador</h1>
        <p>Has iniciado sesión con éxito.</p>
        <a href="./actions/logout.php" class="btn btn-outline-primary">Cerrar sesión</a>

        <div>
            <button class="btn btn-outline-primary">Crear noticia</button>
        </div>
    </div>
</body>
</html>
