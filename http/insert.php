<?php
$_POST = json_decode(array_keys($_POST)[0], true);
        
        $sql_add = "INSERT INTO users ( name, surname ) VALUES (?,?)";
        $stmt = $conn->prepare($sql_add);
        echo  $stmt;
        // $stmt->bind_param("sss", 'rytis', 'tadauskas');
        // $stmt->execute();
        // if (isset($last_id)){
        //   echo $last_id = $conn->insert_id;
        // } 

       
