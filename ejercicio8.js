function analizarTexto(txt){
    const char = txt.lenght
    const palabras = txt.split(" ").length
    const voc = (txt.match(/[aeiou]/gi) || []).length
    const cons = (txt.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length
    return { char, palabras, voc, cons };
}

export default analizarTexto;