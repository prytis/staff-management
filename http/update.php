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

if ( $_POST['selected'] === 'YES') 
{
    $proj_id = $_POST['id'];
    // $sql_insert = "INSERT INTO projectmembers (`projId`) VALUES ('$proj_id')";
    // $conn->query($sql_insert);
    echo $proj_id;
}
if ( $_POST['memberselected'] === 'YES') 
{
    $proj_id = $_POST['selproj'];
    $proj_memberId = $_POST['memberid'];
    $sql_insert = "INSERT INTO projectmembers (`projId`,`memberId`) VALUES ('$proj_id','$proj_memberId')";
    $conn->query($sql_insert);
    echo $proj_id;
}
$conn->close();