<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "tuemail@example.com";  // Cambia esto por tu correo
    $subject = "Nuevo mensaje de contacto";
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    $body = "Nombre: $name\nCorreo: $email\n\nMensaje:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Correo enviado con éxito.";
    } else {
        echo "Error al enviar el correo.";
    }
}
