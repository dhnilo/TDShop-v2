<?php
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

$sql = "SELECT * FROM products";
$result = $conn->query($sql);

$products = array();

if ($result->num_rows > 0) {
  // Output data of each row
  while($row = $result->fetch_assoc()) {
    $products[] = $row;
  }
} else {
  echo "0 results";
}

echo json_encode($products);

$conn->close();
?>