// define una función de nombre reverseWork devuelve un string con el orden de las carácteres invertido
const reverseWord = (word) => {
    let palindromo = word.split("").reverse().join("")
    return palindromo

}

exports.reverseWord = reverseWord;

// Comprueba si una palabra que pasamos por parámetro es un palindromo
// Tipo de datos devuelve esta función? string
exports.checkIfPalindromo = (palabra) => {
    if (palabra == undefined || typeof (palabra) != 'string') {
        throw `Valor inválido, me has pasado ${palabra} y no es un parámetro válido`;
    }

    let check = palabra == reverseWord(palabra) ? `SI` : `NO`
    return check;
}

