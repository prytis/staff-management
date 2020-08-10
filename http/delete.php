<?php
$_POST = json_decode(array_keys($_POST)[0], true);
        $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 

    
if ( $_POST['table'] === 'members') 
{
    $id = $_POST['name'];
    $sql_delete = "DELETE FROM members WHERE id = '$id'";
    $conn->query($sql_delete);
    echo 'Separator: '.DIRECTORY_SEPARATOR." !";
}


if ( $_POST['table'] === 'projects') 
{
    $id = $_POST['name'];
    $sql_delete = "DELETE FROM projects WHERE id = '$id'";
    $conn->query($sql_delete);
    echo '1000';
}
$conn->close();
