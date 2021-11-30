const maxlines = 11;
console.log (repeat);

function send() {
    document.getElementById("phrases").innerHTML = "";
    let repeat = document.getElementById ("num").value;
    if (repeat === ""){
        let paragraph = document.createElement ("p");
        document.getElementById("phrases").appendChild (paragraph);
        paragraph.innerHTML="Insira um número de repetições"
    }
    else {
        repeat = parseInt (repeat);
        let i = 0;
        let erase = 0;
        let line = 0;
        while (i<repeat) { 
            if (i===0){
                document.getElementById("phrases").innerHTML = "";
            }
            if (i%11===0 && i!==0) {
                document.getElementById("phrases").innerHTML = "";
                let paragraph = document.createElement ("p");
                document.getElementById("phrases").appendChild (paragraph);
                paragraph.innerHTML="Eu não usarei abrev.";
                i++;
                erase++;
                document.getElementById("erase").innerHTML = erase;
                line = 1;
            }
            else{
                let paragraph = document.createElement ("p");
                document.getElementById("phrases").appendChild (paragraph);
                paragraph.innerHTML="Eu não usarei abrev."
                i++;
                line++;
                document.getElementById("lines").innerHTML = line;
            }
        }
    }
}