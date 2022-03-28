const result = document.getElementById("result");

function promiseResult(){
    const promise = fetch("http://localhost:3000");
    console.log(promise)
    promise.then((response) => {
        return response.json();
    }).then((data)=> result.innerHTML = data.number)
}