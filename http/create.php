<?php
DEFINE('DB_USERNAME', '');
DEFINE('DB_PASSWORD', '');
DEFINE('DB_HOST', '');
DEFINE('DB_DATABASE', '');
$conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

$sql = "CREATE TABLE `users` (
    `id` int(5) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` text(30) NOT NULL,
    `surname` text(30) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8";
  mysqli_query($conn, $sql);
  $sql = "CREATE TABLE `projects` (
    `id` int(5) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` text(30) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8"; 