<?php
// Database credentials
$servername = "127.0.0.1";
$username = "root";
$password = "root";
$dbname = "TDShop";
$port = "8889";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the data
$data = json_decode(file_get_contents('php://input'), true);

// Prepare the SQL statement
// Construct the SQL statement we want to run, specifying the parameter
// don't trust the user, so we need to use a prepared statement
// avoid SQL injection attacks by using a prepared statement
$stmt = $conn->prepare("INSERT INTO orders (userID, orderID, cart, shippingInfo, isPaid) VALUES (?, ?, ?, ?, ?)");

// Bind the parameters
$stmt->bind_param("iissi", $data['userId'], $data['orderID'], $data['cart'], $data['shippingInfo'], $data['isPaid']);

// Execute the statement and check if it was successful
if ($stmt->execute()) {
  echo json_encode(["message" => "Order executed successfully"]);
} else {
  echo json_encode(["error" => "Error executing order: " . $stmt->error]);
}

// Close the connection
$conn->close();
?>