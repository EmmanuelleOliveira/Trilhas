let idCharacter = 0;

async function searchCharacter(numberRequisition, characterArray) {
    idCharacter = Number(document.getElementById("id-character").value);
    console.log(idCharacter)
    if(idCharacter < 1 || idCharacter > 826) {
        $("#search-result-text").html("Insira um ID válido");
        document.getElementById("character-picture").src = "";
        const response = await fetch (`https://rickandmortyapi.com/api/character/${idCharacter}`);
        console.log(response)
    } else {
        $("#search-result-text").html("");
        if (numberRequisition === "first") {
            const response = await fetch (`https://rickandmortyapi.com/api/character/${idCharacter}`);
            const characterChoosed = await response.json();
            console.log(characterChoosed)
            return characterChoosed;
        } else {
            const response = await fetch (`https://rickandmortyapi.com/api/character/?name=${characterArray[0]}`);
            const characterChoosed = await response.json();
            console.log(characterChoosed)
            return characterChoosed;
        }
    }
};

async function selectCharacter() {
    const character = [];
    try {
        character.push((await searchCharacter("first", character)).name);
        console.log(character);
        let secondRequisition = await searchCharacter ("second", character);
        console.log(secondRequisition)
        $("#search-result-text").html(`${secondRequisition.results[0].name}`)
        document.getElementById("character-picture").src = secondRequisition.results[0].image;
    }
    catch (e) {
        console.log("Error!");
        console.log(e);
    }
};

