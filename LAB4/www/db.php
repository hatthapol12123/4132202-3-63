<?php

try{
    $mysqli = new mysqli("localhost","root","test","myDb");
    echo "Connected !!!";
}
catch(exception $e){
    echo $e->getMessage();
    echo "Error !!!";
}

?>