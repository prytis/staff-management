<?php
$_POST = json_decode(array_keys($_POST)[0], true);

    $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

    if ($conn->connect_error) 
    {
        die("Connection failed: " . $conn->connect_error);
    }
   
    if ( $_POST['name'] == 'project')
    {
    $sql = "SELECT id, name FROM projects";

    $result = mysqli_query($conn, $sql);
    $data =[];
    if ($result->num_rows > 0) {
       
        while($row = $result->fetch_assoc()) {
          $line = array("id" => $row["id"] , "name" => $row["name"]);
          array_push($data, $line);
        }
      } else {
        echo "0 results";
      }
      $conn->close();
    echo json_encode($data);
}
if ( $_POST['name'] == 'member')
{
    $sql = "SELECT id, name, surname FROM users";

    $result = mysqli_query($conn, $sql);
    $data =[];
    if ($result->num_rows > 0) {
       
        while($row = $result->fetch_assoc()) {
          $line = array("id" => $row["id"] , "name" => $row["name"],"surname" => $row["surname"]);
          array_push($data, $line);
        }
      } else {
        echo "0 results";
      }
      
      $conn->close();
    echo json_encode($data);
}

