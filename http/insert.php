<?php
$_POST = json_decode(array_keys($_POST)[0], true);
        $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE); 
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
          }
     if ($_POST['table'] === 'members')
     {
          if (isset($_POST['create'])) {
            $a = $_POST['name'];
            $b = $_POST['surname'];
            $sql_add = "INSERT INTO members (`name`,`surname`)  VALUES ('$a','$b')";
           
            $conn->query($sql_add);
            $last_id = $conn->insert_id;
            echo $last_id;
            
        }
    }
    if ($_POST['table'] === 'projects')
     {
          if (isset($_POST['create'])) {
            $a = $_POST['name'];
            
            $sql_add = "INSERT INTO projects (`name`)  VALUES
             ('$a')";
           
            $conn->query($sql_add);
            $last_id = $conn->insert_id;
            echo $last_id;
            
            
        }
    }
       
