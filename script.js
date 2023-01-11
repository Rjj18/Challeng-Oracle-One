const texto = document.querySelector("#codigo");

function criptografar () {
    let str = texto.value;
    let resultadoCripto = str.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("saida").innerHTML = resultadoCripto;
}

function decifrar () {
    let str = texto.value;
    let resultadoDecifra = str.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
        document.getElementById("saida").innerHTML = resultadoDecifra;
}

function copiar() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
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