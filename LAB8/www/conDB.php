<?php
$host = "db";
$user = :"root";
$pass = "1234";
$db = "class_room";

try{
    $mysqli = new mysqli("host","user","pass","db");
    $mysqli->query("SET NAME utf8");
    echo "Connected !!!";
}
catch(exception $e){
    echo $e->getMessage();
    echo "Error !!!";
}

?>