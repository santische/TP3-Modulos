import fs from "fs/promises";

async function generarArchivo(){
    try{
        const leer = await fs.readFile("./productos.json", "utf-8");
        const productos = JSON.parse(leer);

        let csv = "nombre,precio\n";
        productos.forEach(p => {
        csv += `${p.nombre},${p.precio}\n`;
    });
    await fs.writeFile("./productos.csv", csv);
    console.log("Archivo productos.csv generado correctamente");
    }
    catch (error) {
    console.log("Error:", error.message);
  }
}


export default generarArchivo;
