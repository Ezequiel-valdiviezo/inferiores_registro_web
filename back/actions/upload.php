<?php
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: index.php");
    exit();
}

// Incluir la conexión a la base de datos
include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Recoger los datos del formulario
    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];
    
    // Manejo de la imagen
    $imagen = $_FILES['imagen']['name'];
    $tempname = $_FILES['imagen']['tmp_name'];
    $folder = "../uploads/" . basename($imagen);

    // Validación adicional (opcional)
    $allowed_extensions = ['jpg', 'jpeg', 'png', 'gif'];
    $file_extension = strtolower(pathinfo($folder, PATHINFO_EXTENSION));

    if (in_array($file_extension, $allowed_extensions)) {
        // Mover la imagen a la carpeta 'uploads'
        if (move_uploaded_file($tempname, $folder)) {
            // Insertar los datos en la base de datos
            $stmt = $conn->prepare("INSERT INTO noticias (titulo, descripcion, imagen) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $titulo, $descripcion, $folder);

            if ($stmt->execute()) {
                echo "Noticia subida con éxito!";
                // Redirigir a otra página si es necesario
                // header("Location: home.php?success=true");
                header("Location: ../home.php");
            } else {
                echo "Error al guardar la noticia: " . $stmt->error;
            }

            $stmt->close();
        } else {
            echo "No se pudo subir la imagen.";
        }
    } else {
        echo "Formato de imagen no permitido. Solo se aceptan JPG, JPEG, PNG y GIF.";
    }
    
    // Cerrar la conexión
    mysqli_close($conn);
}
?>
