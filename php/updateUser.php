<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Connect to the database
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "TDShop";
$port = "8889";

// Connect to the database
$conn = new mysqli($servername, $username, $password, $dbname, $port);

if ($conn->connect_error) {
  die('Connection failed: ' . $conn->connect_error);
}

// Get the form data
$userId = $_POST['userId']; // Get the userId from the form data
$name = $_POST['firstName'];
$email = $_POST['email'];
$password = $_POST['password'];

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

var_dump($_POST);

// Update the user's profile information in the database
$sql = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('sssi', $name, $email, $hashedPassword, $userId); // Use the userId from the form data
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "Profile updated successfully.";
} else {
    echo "Failed to update profile.";
    echo $stmt->error;
}

$stmt->close();
$conn->close();
?>