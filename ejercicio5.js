import fs from "fs/promises";

async function buscarProducto(nombre) {
  try {
    const data = await fs.readFile("./productos.json", "utf-8");
    const productos = JSON.parse(data);

    const producto = productos.find(p => 
      p.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (producto) {
      console.log("Producto encontrado");
      console.log("Nombre:", producto.nombre);
      console.log("Precio:", producto.precio);
    } else {
      console.log("Producto no encontrado");
    }

  } catch (error) {
    console.log("Error:", error.message);
  }
}

export default buscarProducto;