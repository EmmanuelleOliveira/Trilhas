function viewrating() {
    const showname = document.querySelector("#name").value;
    const showrating = document.querySelector("#rating").value;
    const showmessage = document.querySelector("#message").value;
    const shown = document.querySelector("#show-name");
    const showr = document.querySelector("#show-rating");
    const showm = document.querySelector("#show-message");
    document.getElementById("show-coments").setAttribute("class","show-coments")
    shown.innerHTML = showname;
    showr.innerHTML = "Nota: " + showrating;
    showm.innerHTML = showmessage;
}

