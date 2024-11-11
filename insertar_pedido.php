<?php
include('conexion.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre_cliente = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $telefono = $_POST['telefono'];
    $sandwich = $_POST['sandwich'];
    $agregado = $_POST['agregado'];
    $cantidad = $_POST['cantidad'];
    $total = $_POST['total'];

    $sql = "INSERT INTO pedidos (nombre_cliente, direccion, telefono, sandwich, agregado, cantidad, total) 
            VALUES ('$nombre_cliente', '$direccion', '$telefono', '$sandwich', '$agregado', '$cantidad', '$total')";

    if ($conn->query($sql) === TRUE) {
        echo "Pedido ingresado con éxito";
    } else {
        echo "Error al ingresar el pedido: " . $conn->error;
    }

    $conn->close();
}
?>
