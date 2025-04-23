<?php
require 'config.php';

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$message = $_POST['message'] ?? '';

// Validasi sederhana (pastikan tidak kosong)
if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    echo "Please fill in all the fields.";
    exit;
}

// Simpan ke database
$sql = "INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name, $email, $phone, $message);

if ($stmt->execute()) {
    echo "Success";
} else {
    echo "Failed to send message. Please try again.";
}

$stmt->close();
$conn->close();
?>
