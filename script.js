const texto = document.querySelector("#codigo");



function criptografar () {
    let str = texto.value;
    let resultadoCripto = str.replace(/e/g, "enter")
        .replace(/a/g, "ai")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    console.log(resultadoCripto);
}

function decifrar () {
    let str = texto.value;
    let resultadoDecifra = str.replace(/enter/g, "e")
        .replace(/ai/g, "a")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        
        console.log(resultadoDecifra);
}




 // Object.keys(encripta).forEach((key) => {
    //   str = str.replaceAll(key, encripta[key]);
    // });
    // console.log(resultadoCripto);
    // let str = texto.value;
    // Object.keys(decifra).forEach((key) => {
    //   str = str.replaceAll(key, decifra[key]);
    // });
    // console.log(str);



// const encripta = {
//     "a": "ai",
//     "e":"enter",
//     "i" :"imes",
//     "o" :"ober",
//     "u": "ufat",
// }

// const decifra = {
//     "ai" :"a",
//     "enter":"e",
//     "imes":"i" ,
//     "ober":"o",
//     "ufat":"u",
// }