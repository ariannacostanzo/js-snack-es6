const logSomething = something => console.log(something);

const tableName = 'Tavolo Vip';
const guestsLists = [];

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


const createGuestList = (guest, i) => {
    newVip = {
        name: guest,
        seatOccupied : i+1,
        tableName: tableName
    }
    guestsLists.push(newVip)

} 

guests.forEach(createGuestList);

logSomething(guestsLists);