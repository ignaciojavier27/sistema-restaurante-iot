<?php
$servername = "bd-eva03.cgkver7pktzx.us-east-1.rds.amazonaws.com";
$username = "admin";
$password = "leica666";
$dbname = "DB_EVALUACION03";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>