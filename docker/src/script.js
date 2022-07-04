function add() {
    const name = document.getElementById("name-user").value;
    const email = document.getElementById("email-user").value;
    if (name !== "" && email !== "") {
        fetch("http://localhost:3000/add", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              /* 'Access-Control-Allow-Origin': "http://localhost:8080", */
              'Access-Control-Allow-Credentials': true
            },
            credentials: "include",
            body: JSON.stringify({
              email: email,
              name: name
            })
        })
            .then(function (response) {
                if (response.status !== 200) {
                    console.log("Verificar problema. STATUS:" + response.status);
                    response.text().then(function (data) {
                        document.getElementById("error-message").innerHTML = `${data}`;
                    });
                }
                else {
                    response.json().then(function (data) {
                        console.log("Inseri no banco" + data);
                    });
                    showTable();
                }
            })
            .catch(function (err) {
                console.log("Verificar ERRO:" + err);
            });
    }
}

function showTable() {
    const tbody = table.querySelector("tbody");
    tbody.innerHTML = "";
    fetch("http://localhost:3000/show", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            /* 'Access-Control-Allow-Origin': "http://localhost:8080", */
            'Access-Control-Allow-Credentials': true
        },
        credentials: "include"
    })
        .then(res => res.json())
        .then(users => {
            tbody.innerHTML = users.map(user => ` 
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td><button type="button" onclick="delete()">Excluir</button></td>
            </tr>`
            ).join("\n");
        })
}