<?php
if($_SERVER['REQUEST_METHOD'] == 'GET') {    
    if(key_exists('PATH_INFO', $_SERVER)){
        http_response_code(404);
        return;
    }

    $view = "index.html";
    if(file_exists($view)) {
        echo file_get_contents($view);
    } else {
        http_response_code(404);
    }
    return;
}

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    // add save to database

    http_response_code(201);
    return;
}
echo "test";
?>
