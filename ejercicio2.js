import fs from "fs/promises";

async function manejarProductos() {
  try {
    const data = await fs.readFile("./productos.json", "utf-8");
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

    await fs.writeFile(
      "./productos.json",
      JSON.stringify(productos, null, 2)
    );

    console.log("\nProducto agregado\n");

    productos.forEach(p => {
      console.log(`${p.nombre} - $${p.precio}`);
    });

  } catch (error) {
    console.log("Error:", error);
  }
}

export default manejarProductos;