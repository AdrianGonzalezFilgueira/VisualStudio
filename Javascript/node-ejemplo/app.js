// Crear un programa que recibe una palabra de scrabble  de la línea de comandos y calcula su puntuación y la muestra por el terminal

const [A, a, E, e, I, i, O, o, U, u, L, l, N, n, R, r, S, s, T, t] = Array(20).fill(1)
const [D, d, G, g] = Array(4).fill(2)
const [B, b, C, c, M, m, P, p] = Array(8).fill(3)
const [F, f, H, h, V, v, W, w, Y, y] = Array(10).fill(4)
const [K, k] = Array(2).fill(5)
const [J, j, X, x] = Array(4).fill(8)
const [Q, q, Z, z] = Array(4).fill(10)


function scrabbleScore(str) {
    var score = 0;

    if (str === "") {
        score = 0
    } else {
        let string = str
        string = string.split("").join("+")
        score = eval(string)
    }

    return score
};

let palabra = process.argv[2];
console.log(scrabbleScore(palabra));