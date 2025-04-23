<?php
$host = "localhost";
$user = "root"; // ganti jika beda
$pass = "";     // ganti jika punya password
$db = "contact_form";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
