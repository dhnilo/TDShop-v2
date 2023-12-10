<?php
// Your existing connection information
$servername = "127.0.0.1";
$username = "root";
$password = "root";
$dbname = "TDShop";
$port = "8889";

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Connect to the database
$db = new mysqli($servername, $username, $password, $dbname, $port);

// Check the connection
if ($db->connect_error) {
  die('Connection failed: ' . $db->connect_error);
}

// Get the JSON payload from the request
$json = file_get_contents('php://input');
// Convert the JSON payload to an associative array
$data = json_decode($json, true);

// Get the entered email and password
$email = $data['email'];
$password = $data['password'];

// Log the entered email and password
error_log("Email: $email");
error_log("Password: $password");

// Prepare a SQL query to select the user with the entered email
$stmt = $db->prepare('SELECT * FROM users WHERE email = ?');
$stmt->bind_param('s', $email);

// Execute the query
$stmt->execute();

// Get the result
$result = $stmt->get_result();

// Check if a user was found
if ($result->num_rows > 0) {
  // Get the user
  $user = $result->fetch_assoc();

  // Log the hashed password from the database
  error_log("Hashed password from database: " . $user['password']);

  // Check if the entered password matches the hashed password in the database
  if (password_verify($password, $user['password'])) {
    // The passwords match
    echo json_encode(['success' => true, 'isMember' => $user['isMember'], 'userId' => $user['id']]);
} else {
    // The passwords don't match
    echo json_encode(['success' => false]);
}
} else {
  // No user was found
  echo json_encode(['success' => false]);
}

// Close the database connection
$db->close();
?>