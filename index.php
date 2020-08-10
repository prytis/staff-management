<?php
include ('config.php');
$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
        require __DIR__ . '/views/home.php';
        break;
    case '' :
        require __DIR__ . '/views/home.php';
        break;
    case '/read' :
        require __DIR__ . '/http/read.php';
        break;
    case '/insert' :
        require __DIR__ . '/http/insert.php';
        break;    
    case '/delete' :
        require __DIR__ . '/http/delete.php';
        break;  
    case '/update' :
        require __DIR__ . '/http/update.php';
        break; 
    default:
        http_response_code(404);
        require __DIR__ . '/views/404.php';
        break;
}