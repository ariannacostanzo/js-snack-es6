const footballTeams = [
    {   name: "Team A", 
        goals: 0, 
        fouls: 0 },
    { 
        name: "Team B", 
        goals: 0, 
        fouls: 0 },
    { 
        name: "Team C", 
        goals: 0, 
        fouls: 0 },
    { 
        name: "Team D", 
        goals: 0, 
        fouls: 0 },
    { 
        name: "Team E", 
        goals: 0, 
        fouls: 0 }
  ];

  console.log(footballTeams)

//funzione che mi ritorna un numero random da 1 a max
const getRandomNumber = max => Math.floor(Math.random() *max) + 1

// inserisco numeri random al posto di goals and fouls

footballTeams.forEach((team) => {
    team.goals = getRandomNumber(20);
    team.fouls = getRandomNumber(20);
})

console.log(footballTeams)

const teamFouls = footballTeams.map((team) => {

    const {name, fouls} = team;
    return {
        name, fouls
    }

});

console.log(teamFouls)