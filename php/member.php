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

// Prepare an SQL UPDATE statement
$sql = "UPDATE users SET isMember = 'true' WHERE id = ?";

// Log the SQL UPDATE statement
error_log("SQL UPDATE statement: " . $sql);

// Create a prepared statement
$stmt = $conn->prepare($sql);

// Get the raw POST data
$postData = file_get_contents('php://input');

// Decode the JSON data
$data = json_decode($postData, true);

// Check if userId is set in the POST request
if (!isset($data['userId'])) {
    echo json_encode(["error" => "userId not set in the POST request"]);
    exit();
}

// Bind parameters
$stmt->bind_param("i", $data['userId']);

// Log the userId
error_log("userId: " . $data['userId']);

// Execute the statement
if ($stmt->execute()) {
  // Check the number of affected rows
  if ($stmt->affected_rows === 0) {
      echo json_encode(["error" => "No rows updated. The userId might not exist or the isMember column might already be 'true'."]);
  } else {
      echo json_encode(["message" => "Record updated successfully"]);
  }
} else {
  echo json_encode(["error" => "Error updating record: " . $stmt->error]);
}

// Close the statement and the connection
$stmt->close();
$conn->close();
?>