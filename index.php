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

function getProductDetailsFromDatabase($id) {
  global $conn;

  // Construct the SQL statement we want to run, specifying the parameter
// don't trust the user, so we need to use a prepared statement
// avoid SQL injection attacks by using a prepared statement
  $sql = "SELECT * FROM products WHERE id = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("s", $id);;
  $stmt->execute();
  $result = $stmt->get_result();

  if ($result->num_rows > 0) {
      return $result->fetch_assoc();
  } else {
      return null;
  }
}

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $product = getProductDetailsFromDatabase($id);
    echo json_encode($product);
} else {
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
}

$conn->close();
?>