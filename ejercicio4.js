import axios from "axios";

async function obtenerPais(nombrePais) {
  try {
    const res = await axios.get(`https://www.apicountries.com/countries${nombrePais}`);

    const pais = res.data[0];

    console.log("País:", pais.name.common);
    console.log("Capital:", pais.capital?.[0]);
    console.log("Región:", pais.region);
    console.log("Población:", pais.population);
  } 
  catch (error) {
    console.log("Error:", error.message);
  }
}

export default obtenerPais;