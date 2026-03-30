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




// import axios from "axios";
// import https from "https";

// const agent = new https.Agent({
//   rejectUnauthorized: false
// });

// async function obtenerPais(nombrePais) {
//   try {
//     const res = await axios.get(
//       `https://restcountries.com/v3.1/name/${nombrePais}`,
//       {
//         httpsAgent: agent
//       }
//     );

//     const pais = res.data[0];

//     console.log("País:", pais.name.common);
//     console.log("Capital:", pais.capital?.[0]);
//     console.log("Región:", pais.region);
//     console.log("Población:", pais.population);

//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }

// export default obtenerPais;

//Ctrl/Cmd + K + U