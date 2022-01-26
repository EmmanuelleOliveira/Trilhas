function dadosMatriz (matriz, l, c) {
    if (l < matriz.length){
        if (c < matriz[l].length){
            console.log(`Elemento ${l+1}${c+1}: ${matriz[l][c]}`);
            dadosMatriz (matriz, l, c + 1);
        } else {
            dadosMatriz (matriz, l+1, 0);
        }
    }
}

dadosMatriz([[1,2,3,4], [5,6,7,8], [9,10,11,12]], 0, 0)