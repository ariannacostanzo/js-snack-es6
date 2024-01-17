const logSomething = something => console.log(something);

const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    },
];

//creo una lista di studenti che hanno voti superiori a 70
const gradesAbove70 = students.filter(({grades}) => grades > 70);

logSomething(gradesAbove70);

const gradesAbove70AndIDAbove120 = gradesAbove70.filter(({id}) => id > 120);

logSomething(gradesAbove70AndIDAbove120);

const studentsNames = students.map(({name}) => name.toUpperCase());

logSomething(studentsNames);

    
    
//sfida 

const string = `Id|Name|Grades
213|Marco della Rovere|78
110|Paola Cortellessa|96
250|Andrea Mantegna|48
145|Gaia Borromini|74
196|Luigi Grimaldello|68
102|Piero della Francesca|50
120|Francesca da Polenta|84`

// fare diventare questa stringa in un array di oggetti