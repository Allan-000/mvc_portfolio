<?php
$db_name="portfolio";
$host="localhost";
$user="root";
$password="";

$db="mysql:host=$host;dbname=$db_name";

try{
    $pdo=new PDO("$db","$user","$password");
}
catch (PDOException $e){
    echo $e->getMessage();
}