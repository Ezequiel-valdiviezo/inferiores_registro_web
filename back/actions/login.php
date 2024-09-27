<?php
session_start();

// Datos de ejemplo. En un entorno real, estos valores deberían venir de una base de datos.
$usuario_valido = 'ezequiel@gmail.com';
$contrasena_valida = '123456';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if ($email == $usuario_valido && $password == $contrasena_valida) {
        // Guardar información en la sesión
        $_SESSION['loggedin'] = true;
        $_SESSION['email'] = $email;

        // Redirigir al usuario a la página de inicio
        header("Location: ../admin/home.php");
        exit();
    } else {
        // Si las credenciales no coinciden, mostrar un mensaje de error
        echo "Email o contraseña incorrectos";
    }
}
?>
