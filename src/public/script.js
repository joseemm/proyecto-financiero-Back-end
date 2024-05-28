document.getElementById('testApi').addEventListener('click', () => {
    fetch('/api/transacciones')  // Ajusta esta ruta según tus necesidades
      .then(response => response.json())
      .then(data => {
        console.log('Datos de la API:', data);
        alert('Datos de la API obtenidos, revisa la consola para más detalles.');
      })
      .catch(error => {
        console.error('Error al obtener datos de la API:', error);
        alert('Error al obtener datos de la API.');
      });
  });
  