<?php
DEFINE('DB_USERNAME', 'root');
DEFINE('DB_PASSWORD', 'root');
DEFINE('DB_HOST', 'mysql');
DEFINE('DB_DATABASE', 'dbTest');
$conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

$sql = "CREATE TABLE `members` (
    `id` int(5) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` text(30) NOT NULL,
    `surname` text(30) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8";
  mysqli_query($conn, $sql);
  $sql = "CREATE TABLE `projects` (
    `id` int(5) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` text(30) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8"; 
  mysqli_query($conn, $sql);
  $sql ="INSERT INTO members (`name`,`surname`)  VALUES ('Jonas','Jonaitis'),
                                                 ('Zenius','Grigaitis') ,
                                                 ('Juozas','Juozaitis'),
                                                 ('Alius','Zabiela')";
  mysqli_query($conn, $sql);
  $sql ="INSERT INTO projects (`name`)  VALUES ('ADA'),
                                              ('PHP'), 
                                              ('JAVA'),
                                              ('SQL')";
  mysqli_query($conn, $sql);
  $conn->close();