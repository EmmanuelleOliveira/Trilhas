const data = [
    {
        id: 1,
        name: 'Emmanuelle Oliveira',
        extension: 201,
        email: 'emmanuelleamaral@hotmail.com',
        department: 'Tecnologia',
        birthDate: "18/11/1994"
    },
    {
        id: 2,
        name: 'Emmanuella Oliveira',
        extension: 202,
        email: 'emmanuellaamaral@hotmail.com',
        department: 'Arquitetura',
        birthDate: "18/11/1994"
    },
    {
        id: 3,
        name: 'João Lucas de Alcântara',
        extension: 201,
        email: 'joaoalcantara@hotmail.com',
        department: 'Tecnologia',
        birthDate: "17/04/1996"
    },
    {
        id: 4,
        name: 'Anderson Ferreira',
        extension: 201,
        email: 'andersonferreira@hotmail.com',
        department: 'Tecnologia',
        birthDate: "18/12/1995"
    },
    {
        id: 5,
        name: 'Tainan Monteiro',
        extension: 202,
        email: 'tainanmonteiro@hotmail.com',
        department: 'Arquitetura',
        birthDate: "30/04/1995"
    },
    {
        id: 6,
        name: 'Lucélia Tamires',
        extension: 203,
        email: 'luceliatamires@hotmail.com',
        department: 'Engenharia',
        birthDate: "20/10/1996"
    },
    {
        id: 7,
        name: 'Blenda Larissa',
        extension: 204,
        email: 'blendalarissa@hotmail.com',
        department: 'Juridico',
        birthDate: "03/02/1995"
    },
    {
        id: 8,
        name: 'Kátia Moura',
        extension: 205,
        email: 'katiamoura@hotmail.com',
        department: 'Saude',
        birthDate: "09/03/1993"
    },
    {
        id: 9,
        name: 'Rosanne Amaral',
        extension: 203,
        email: 'rosanneamaral@hotmail.com',
        department: 'Engenharia',
        birthDate: "31/12/1993"
    },
    {
        id: 10,
        name: 'Caroline Ventura',
        extension: 205,
        email: 'carolineventura@hotmail.com',
        department: 'Saude',
        birthDate: "21/01/1999"
    },
    {
        id: 11,
        name: 'Lídia Ventura',
        extension: 205,
        email: 'lidiaventura@hotmail.com',
        department: 'Saude',
        birthDate: "09/02/1992"
    },
    {
        id: 12,
        name: 'Maria Rita',
        extension: 206,
        email: 'mariarita@hotmail.com',
        department: 'Administrativo',
        birthDate: "25/07/1971"
    },
    {
        id: 13,
        name: 'Batista Guedes',
        extension: 206,
        email: 'batistaguedes@hotmail.com',
        department: 'Administrativo',
        birthDate: "10/10/1970"
    },
    {
        id: 14,
        name: 'Felipe Marques',
        extension: 204,
        email: 'felipemarques@hotmail.com',
        department: 'Juridico',
        birthDate: "14/06/1985"
    },
    {
        id: 15,
        name: 'Socorro Leite',
        extension: 206,
        email: 'socorroleite@hotmail.com',
        department: 'Administrativo',
        birthDate: "19/02/1992"
    },
    {
        id: 16,
        name: 'Otacílio Barbosa',
        extension: 207,
        email: 'otaciliobarbosa@hotmail.com',
        department: 'Marketing',
        birthDate: "19/06/1961"
    },
    {
        id: 17,
        name: 'Fernanda Sousa',
        extension: 207,
        email: 'fernandasousa@hotmail.com',
        department: 'Marketing',
        birthDate: "15/07/1974"
    },
    {
        id: 18,
        name: 'Bernardo Silveira',
        extension: 201,
        email: 'bernardosilveira@hotmail.com',
        department: 'Tecnologia',
        birthDate: "25/07/1971"
    },
    {
        id: 19,
        name: 'Francisco Torres',
        extension: 207,
        email: 'franciscotorres@hotmail.com',
        department: 'Marketing',
        birthDate: "16/06/1983"
    },
    {
        id: 20,
        name: 'Quitéria Soares',
        extension: 204,
        email: 'quiteriasoares@hotmail.com',
        department: 'Juridico',
        birthDate: "10/10/1970"
    },
    {
        id: 21,
        name: 'Fátima Dionísio',
        extension: 202,
        email: 'fatimadionisio@hotmail.com',
        department: 'Arquitetura',
        birthDate: "21/09/1959"
    },
    {
        id: 22,
        name: 'Carlos Nogueira',
        extension: 206,
        email: 'carlosnogueira@hotmail.com',
        department: 'Administrativo',
        birthDate: "27/01/1999"
    },
    {
        id: 23,
        name: 'Guilherme Paiva',
        extension: 203,
        email: 'guilhermepaiva@hotmail.com',
        department: 'Engenharia',
        birthDate: "09/03/1993"
    },
    {
        id: 24,
        name: 'Marília Costa',
        extension: 203,
        email: 'mariliacosta@hotmail.com',
        department: 'Engenharia',
        birthDate: "02/09/1975"
    },
    {
        id: 25,
        name: 'Gisele Marinho',
        extension: 207,
        email: 'giselemarinho@hotmail.com',
        department: 'Marketing',
        birthDate: "19/06/1961"
    },
    {
        id: 26,
        name: 'Helena Xavier',
        extension: 205,
        email: 'helenaxavier@hotmail.com',
        department: 'Saude',
        birthDate: "26/11/1982"
    },
    {
        id: 27,
        name: 'Márcia Percival',
        extension: 204,
        email: 'marciapercival@hotmail.com',
        department: 'Juridico',
        birthDate: "21/09/1959"
    },
    {
        id: 28,
        name: 'Douglas Pereira',
        extension: 203,
        email: 'douglaspereira@hotmail.com',
        department: 'Engenharia',
        birthDate: "14/10/1976"
    },
    {
        id: 29,
        name: 'Gustavo Bono',
        extension: 201,
        email: 'gustavobono@hotmail.com',
        department: 'Tecnologia',
        birthDate: "05/04/1978"
    },
    {
        id: 30,
        name: 'Waleria Gomes',
        extension: 205,
        email: 'waleriagomes@hotmail.com',
        department: 'Saude',
        birthDate: "18/06/1983"
    },
]

module.exports = data;