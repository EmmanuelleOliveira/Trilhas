function workers(department, data) {
    const departmentWorkers = data.filter(worker => {
        let workerRegex = new RegExp(department, "gi"); //Procura pelo departamento independentemente se foi escrito com maiúsculas ou minúsculas
        if(workerRegex.test(worker.department)){
            return worker;
        }
    });
    return departmentWorkers;
}

module.exports = workers;