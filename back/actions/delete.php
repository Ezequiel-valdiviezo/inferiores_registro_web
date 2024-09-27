<?php
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: ../index.php");
    exit();
}

// Incluir la conexión a la base de datos
include 'conexion.php';

// Verificar si se envió el ID de la noticia a eliminar
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Primero, obtener la ruta de la imagen para eliminarla del servidor
    $query = "SELECT imagen FROM noticias WHERE id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->bind_result($imagePath);
    $stmt->fetch();
    $stmt->close();

    // Eliminar el archivo de imagen del servidor
    if (file_exists($imagePath)) {
        unlink($imagePath);
    }

    // Ahora eliminar la noticia de la base de datos
    $deleteQuery = "DELETE FROM noticias WHERE id = ?";
    $stmt = $conn->prepare($deleteQuery);
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        header("Location: ../admin/noticiasAdmin.php?success=true");
    } else {
        echo "Error al eliminar la noticia: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "ID de noticia no proporcionado.";
}

// Cerrar la conexión
$conn->close();
?>
