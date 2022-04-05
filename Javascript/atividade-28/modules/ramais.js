function extension(extensionSearch, data) {
    let extensionFound = data.filter(workers => {
        if(extensionSearch === workers.extension) {
            return workers;
        }
    });
    const extensionOrdered = extensionFound.sort(function (a, b) { //Coloca em ordem alfabética pelo nome dos funcionários
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    });
    return extensionOrdered;
}

module.exports = extension;