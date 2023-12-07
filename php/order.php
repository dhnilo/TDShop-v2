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

// Get the order from the request
$order = json_decode(file_get_contents('php://input'), true);

// SQL query to insert the new order
$sql = "INSERT INTO orders (userId, orderID, cart, shippingInfo)
VALUES ('{$order['userId']}', '{$order['orderID']}', '{$order['cart']}', '{$order['shippingInfo']}')";

if ($conn->query($sql) === TRUE) {
  echo json_encode(array("message" => "New record created successfully"));
} else {
  echo json_encode(array("error" => "Error placing order"));
}

$conn->close();
?>