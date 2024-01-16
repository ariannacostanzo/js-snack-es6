const logSomething = something => console.log(something);

//prendo gli elementi che mi servono

const table = document.querySelector('.table');
const seatContainer = document.querySelector('.seats')

const tableName = 'Tavolo Vip';
const guestsLists = [];
let template = '';

const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
  ];

//ho aggiunto successivamente l'immagine
const createGuestList = (guest, i) => {
    newVip = {
        name: guest,
        seatOccupied : i+1,
        tableName: tableName,
        image: `vip${i+1}.jpg`
    };
    guestsLists.push(newVip);

};


//funzione che mi crea un template da stampare in pagina


const createTemplate = guest => {
    
    template = `
    <div class="seat">
        <img src="images/${guest.image}" alt="" class="vip-image">
        <div class="vip-name">${guest.name}</div>
        <div class="seat-number">${guest.seatOccupied}</div>
    </div>
    `

    seatContainer.innerHTML += template;
}


guests.forEach(createGuestList);

logSomething(guestsLists);

//continuo stampando in pagina

//do al tavolo il suo nome
table.innerText = tableName;

//creo tanti posti quanti gli ospiti
guestsLists.forEach(createTemplate);

//cambio la posizione degli elementi