<?php
// Datos de la base de datos
$servername = "localhost";  // Usualmente 'localhost', pero puede cambiar dependiendo del servidor
$username = "root";   // El nombre de usuario de la base de datos
$password = ""; // La contraseña del usuario de la base de datos
$database = "gintita"; // El nombre de la base de datos

// Crear la conexión
$conn = mysqli_connect($servername, $username, $password, $database);

// Verificar la conexión
if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

// Puedes agregar un mensaje opcional para verificar que la conexión fue exitosa
// echo "Conexión exitosa";
?>
