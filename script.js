const agregarPedidoBtn = document.getElementById('agregarPedido');
const vaciarCamposBtn = document.getElementById('vaciarCampos');
const ingresarPedidoBtn = document.getElementById('ingresarPedido');
const tablaProductos = document.getElementById('tablaProductos').getElementsByTagName('tbody')[0];
const totalLabel = document.getElementById('totalLabel').getElementsByTagName('span')[0];

let total = 0;

function agregarPedido() {
    const sandwich = document.getElementById('sandwichSelect').value;
    const agregado = document.getElementById('agregadoSelect').value;
    const cantidad = parseInt(document.getElementById('cantidad').value,10);

    if (cantidad > 0 && sandwich && agregado){
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
            <td>${sandwich}</td>
            <td>${agregado}</td>
            <td>${cantidad}</td>
        `;

        tablaProductos.appendChild(nuevaFila);

        total += (800 * cantidad) + (200 * cantidad);
        totalLabel.textContent = total.toFixed(2);
    }else{
        alert('Por favor, completa todos los campos.')
    }
}

function vaciarCampos() {
    document.getElementById('nombre').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('telefono').value = '';

    tablaProductos.innerHTML = '';
    total = 0;
    totalLabel.textContent = '0';
}

async function enviarPedido() {
    const nombre_cliente = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;

    const formData = new FormData();
    formData.append('nombre', nombre_cliente);
    formData.append('direccion', direccion);
    formData.append('telefono', telefono);
    formData.append('sandwich', document.getElementById('sandwichSelect').value);
    formData.append('agregado', document.getElementById('agregadoSelect').value);
    formData.append('cantidad', document.getElementById('cantidad').value);
    formData.append('total', total.toFixed(2));

    try{
        const response = await fetch('insertar_pedido.php', {
            method: 'POST',
            body: formData
        });

        if(response.ok){
            const result = await response.text();
            alert(result);
            vaciarCampos();
        }else{
            alert('Error al enviar el pedido: ', response.statusText);
        }
    }catch(err){
        console.error('Error en la conexión: ', err);
        alert('Hubo un error con la conexión al servidor.');
    }

}

agregarPedidoBtn.addEventListener('click', agregarPedido);
vaciarCamposBtn.addEventListener('click', vaciarCampos);
ingresarPedidoBtn.addEventListener('click', enviarPedido);