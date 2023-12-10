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

// Get the orderID from the request parameters
$orderID = $_GET['orderID'];

// Query the database to get the row
// Construct the SQL statement we want to run, specifying the parameter
// don't trust the user, so we need to use a prepared statement
// avoid SQL injection attacks by using a prepared statement
$query = "SELECT * FROM orders WHERE orderID = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $orderID);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

// Encode the row data as a JSON string and return it
echo json_encode($row);
?>