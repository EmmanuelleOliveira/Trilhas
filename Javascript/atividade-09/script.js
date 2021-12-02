let vector = [];

function save() {
    let first = parseFloat (document.querySelectorAll(".num")[0].value);
    let second = parseFloat (document.querySelectorAll(".num")[1].value);
    let third = parseFloat (document.querySelectorAll(".num")[2].value);
    let fourth = parseFloat (document.querySelectorAll(".num")[3].value);
    vector = [first, second, third, fourth];
    document.getElementById("show-num").innerHTML= "O vetor é: [" + vector + "]";
}

function organize () {
    let newvector = [];
    for(i=3; i>=0; i--) {
        newvector.push (vector[i]);
    }
    document.getElementById("changes-reorganize").innerHTML= "O vetor é: [" + newvector + "]";
}

function ascending() {
    let asc  = vector;
    let aux;
    for (i=0; i<asc.length; i++){
        for (j=0; j<asc.length; j++){
            if (asc[i]<asc[j]){
                aux = asc[i];
                asc [i] = asc [j];
                asc [j] = aux;
            }
        }
    }
    document.getElementById("changes-ascending").innerHTML= "O vetor é: [" + asc + "]";
}