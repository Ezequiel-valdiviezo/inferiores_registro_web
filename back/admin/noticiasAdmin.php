<?php
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: index.php");
    exit();
}

// Incluir la conexión a la base de datos
include '../actions/conexion.php';

// Consultar todas las noticias
$query = "SELECT * FROM noticias";
$result = $conn->query($query);

// Verificar si se recuperaron noticias
if ($result === false) {
    die("Error en la consulta: " . $conn->error);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Administración de Noticias</title>
    <link rel="stylesheet" href="../estilos/home.css">
</head>
<body>
    <div class="container text-center pt-3">
        <img src="../img/logopng.webp" width="150px" alt="">
        <h1 class="text-white">Panel de Administración de Noticias</h1>
        <p class="text-white">Has iniciado sesión con éxito.</p>
        <a href="../actions/logout.php" class="btn btn-danger">Cerrar sesión</a>
        <a href="./home.php" class="btn btn-success">Volver</a>

        <div class="mt-5">
            <h2 class="text-white mb-3">Todas las Noticias</h2>
            <table class="table table-bordered table-light">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>Imagen</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <?php while ($row = $result->fetch_assoc()): ?>
                    <tr>
                        <td><?php echo $row['id']; ?></td>
                        <td><?php echo $row['titulo']; ?></td>
                        <td><?php echo $row['descripcion']; ?></td>
                        <td>
                            <img src="../uploads/<?php echo htmlspecialchars($row['imagen']); ?>" alt="Imagen de noticia" width="100px">
                        </td>
                        <td><a href="../actions/delete.php?id=<?php echo $row['id']; ?>" class="btn btn-danger" onclick="return confirm('¿Estás seguro de que quieres eliminar esta noticia?');">Eliminar</a></td>
                    </tr>
                    <?php endwhile; ?>
                </tbody>
            </table>
        </div>

    </div>
</body>
</html>

<?php
// Cerrar la conexión
$conn->close();
?>
