const racingBicycles = [
    { name: 'Speedster', weight: 7.2 },
    { name: 'Aeroblade', weight: 6.8 },
    { name: 'Velocity Pro', weight: 7.5 },
    { name: 'Lightning Fast', weight: 6.5 },
    { name: 'Swift Rocket', weight: 7.8 },
    { name: 'Aggressive Ride', weight: 7.0 },
    { name: 'Victory Sprint', weight: 6.9 },
    { name: 'Turbo Charge', weight: 7.3 }
];

//Uso il metodo reduce per partire a controllare dal primo oggetto (racingBycicles[0]), questo sarà il valore iniziale di lightestWeightBike, in questo caso 7.2
//ad ogni giro lightestWeightBike controllerà se incontro un altro peso che è minore di quello attuale, dopo aver girato per tutti troverò il peso minimo


const lightestBike = racingBicycles.reduce((lightestWeightBike, currentBike) => {

    return currentBike.weight < lightestWeightBike.weight ? currentBike : lightestWeightBike
    
}, racingBicycles[0]);


console.log(lightestBike);

