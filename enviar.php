<?php

$message = $_POST['message'];
$token = " ";//token de acceso de meta
$numberDestination = "34611871555";
$phone_id = ""; //id obtenido en meta

$url = "https://graph.facebook.com/v18.0/$phone_id/messages";
$data = [
   "messaging_product" => "whatsapp",
   "to" => $numberDestination,
   "type" => "text",
   "text" => [
      "body" => $message
   ]
];

$options = [
   'http' => [
      'method' => 'POST',
      'header' => 'Content-Type: application/json\r\nAuthorization: Bearer ' . $token . '\r\n',
      'content' => json_encode($data)
   ]
];
$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);

echo "mensaje enviado";
