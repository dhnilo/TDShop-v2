<?php
// Your existing connection information
$servername = "127.0.0.1";
$username = "root";
$password = "root";
$dbname = "TDShop";
$port = "8889";

// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Connect to the database
$db = new mysqli($servername, $username, $password, $dbname, $port);

// Check the connection
if ($db->connect_error) {
  die('Connection failed: ' . $db->connect_error);
}

// Check if the $_POST array is receiving the data
if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['password'])) {
  die('Data not received');
}

// Get the entered name, email and password
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Prepare a SQL query to select the user with the entered email
$stmt = $db->prepare('SELECT * FROM users WHERE email = ?');
$stmt->bind_param('s', $email);

// Execute the query
$stmt->execute();

// Get the result
$result = $stmt->get_result();

// Check if a user was found
if ($result->num_rows > 0) {
  // A user was found
  echo json_encode(['success' => false, 'message' => 'User already exists']);
} else {
// Hash the password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Prepare an SQL statement
$stmt = $db->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");

// Bind the parameters to the SQL statement
$stmt->bind_param("sss", $name, $email, $hashedPassword);

  if ($stmt->execute()) {
    // Check if the data was inserted
    if ($stmt->affected_rows > 0) {
      echo json_encode(['success' => true]);
    } else {
      echo json_encode(['success' => false, 'message' => 'No rows affected']);
    }
  } else {
    echo json_encode(['success' => false, 'message' => 'Query execution failed: ' . $stmt->error]);
  }

  // Close the statement
  $stmt->close();
}

// Close the database connection
$db->close();
?>