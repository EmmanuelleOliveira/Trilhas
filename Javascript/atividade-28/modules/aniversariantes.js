function birthday(monthSearch, data) { //Recebe como parâmetros o mês a ser procurado e o array de objetos que contém as informações dos funcionários
    const birthdayWorker = data.filter(worker => { 
        const month = worker.birthDate.split('/')[1]; //Separa o mês do aniversário de cada funcionário 
        if(month === monthSearch) { 
            return worker;
        }
    })
    return birthdayWorker;
}

module.exports = birthday;