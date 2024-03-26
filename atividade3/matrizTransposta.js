function transporMatriz(A) {
    console.log("Matriz:");
    imprimirMatriz(A);

    console.log("Matriz Transposta:");
    const transposta = calcularTransposta(A);
    imprimirMatriz(transposta);
}

function imprimirMatriz(matriz) {
    matriz.forEach(row => console.log(row.join(" ")));
}

function calcularTransposta(A) {
    const linhas = A.length;
    const colunas = A[0].length;
    const transposta = [];
    
    for (let j = 0; j < colunas; j++) {
        const novaLinha = [];
        for (let i = 0; i < linhas; i++) {
            novaLinha.push(A[i][j]);
        }
        transposta.push(novaLinha);
    }
    
    return transposta;
}

// Ex de matriz
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transporMatriz(matriz);
