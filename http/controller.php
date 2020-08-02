<?php
$_POST = json_decode(array_keys($_POST)[0], true);

if ( $_POST['name'] == 'start')
{
    
    DEFINE('DB_USERNAME', 'root');
    DEFINE('DB_PASSWORD', 'root');
    DEFINE('DB_HOST', 'localhost:3306');
    DEFINE('DB_DATABASE', 'dbTest');

    $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

    if ($conn->connect_error) 
    {
        die("Connection failed: " . $conn->connect_error);
    }
   

    $sql = "SELECT id, name, surname FROM users";

    $result = mysqli_query($conn, $sql);
    $data =[];
    if ($result->num_rows > 0) {
       
        while($row = $result->fetch_assoc()) {
          array_push($data,$row["id"] .' '. $row["name"].' '. $row["surname"]);
        }
      } else {
        echo "0 results";
      }
      $conn->close();
    echo json_encode($data);
}