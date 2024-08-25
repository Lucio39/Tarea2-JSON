fetch('data/data.json') // Ruta al archivo JSON
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        return response.json();
    })
    .then(data => {
        // Selecciona el cuerpo de la tabla donde se mostrarán los personajes
        const contenedor = document.getElementById('personajes');
        
        // Itera sobre cada personaje en el objeto JSON
        data.forEach(personaje => {
            // Crea una nueva fila para la tabla
            const fila = document.createElement('tr');
            
            // Crea celdas para el ID, nombre y casa
            const celdaId = document.createElement('td');
            celdaId.textContent = personaje.id; // Asigna el ID
            
            const celdaNombre = document.createElement('td');
            celdaNombre.textContent = personaje.nombre; // Asigna el nombre
            
            const celdaCasa = document.createElement('td');
            celdaCasa.textContent = personaje.casa; // Asigna la casa
            
            // Añade las celdas a la fila
            fila.appendChild(celdaId);
            fila.appendChild(celdaNombre);
            fila.appendChild(celdaCasa);
            
            // Añade la fila al contenedor de la tabla
            contenedor.appendChild(fila);
        });
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud Fetch:', error);
    });

