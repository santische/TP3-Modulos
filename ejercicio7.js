let i = 1;

const intervalo = setInterval(() => {
    console.log(i);

    if (i == 10){
        console.log("fin del contador")
        clearInterval(intervalo);
    }
    i++;
}, 1000);

export default intervalo;