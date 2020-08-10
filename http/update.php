<?php
$_POST = json_decode(array_keys($_POST)[0], true);
        $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 

    
if ( $_POST['table'] === 'members') 
{
    $name = $_POST['name'];
    $id = $_POST['id'];
    $surname = $_POST['surname'];
    $sql_update = "UPDATE members SET name = '$name', surname = '$surname' WHERE id = '$id'";
    $conn->query($sql_update);
    echo '1000';
}


if ( $_POST['table'] === 'projects') 
{
    $name = $_POST['name'];
    $id = $_POST['id'];
    $sql_update = "UPDATE projects SET name = '$name' WHERE id = '$id'";
    $conn->query($sql_update);
    echo 'OK 1000';
}
$conn->close();