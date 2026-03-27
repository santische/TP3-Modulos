import fs from "fs";

function manejarProductos() {
  fs.readFile("./productos.json", "utf-8", (err, data) => {
    if (err) {
      console.log("Error al leer el archivo");
      return;
    }

    const productos = JSON.parse(data);

    console.log("Productos actuales:");
    productos.forEach(p => {
      console.log(`${p.nombre} - $${p.precio}`);
    });

    const nuevoProducto = {
      nombre: "Monitor",
      precio: 120000
    };

    productos.push(nuevoProducto);

    fs.writeFile("./productos.json", JSON.stringify(productos, null, 2), (err) => {
      if (err) {
        console.log("Error al guardar");
        return;
      }

      console.log("\nProducto agregado\n");

      productos.forEach(p => {
        console.log(`${p.nombre} - $${p.precio}`);
      });
    });
  });
}

export default manejarProductos;