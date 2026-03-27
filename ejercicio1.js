const productos = [
  { nombre: "Mouse", precio: 1500 },
  { nombre: "Teclado", precio: 3500 }
];

function mostrarProductos() {
  productos.forEach(p => {
    console.log(`${p.nombre} - $${p.precio}`);
  });
}

export default mostrarProductos;