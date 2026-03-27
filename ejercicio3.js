import dayjs from "dayjs";
import "dayjs/locale/es.js";

dayjs.locale("es");

function mostrarFecha() {
  const ahora = dayjs();

  console.log("Fecha actual:", ahora.format("DD/MM/YYYY"));
  console.log("Hora actual:", ahora.format("HH:mm:ss"));
  console.log("Fecha formateada:", ahora.format("dddd, D [de] MMMM [de] YYYY"));
}

export default mostrarFecha;