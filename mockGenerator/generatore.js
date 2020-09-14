let mock = require('./mock-data-source.js')
let fs = require("fs");

/* 
let recentCars = []
let count = 0

for(k=0;k<5;k++){
    for(l=0;l<5;l++){
        recentCars.push({id: count, userId:k, carId:generateRecentCar()})
        count++
    }
}

function generateRecentCar(){
    let id = 25
    while(id >= 25){
        id = Math.trunc(Math.random() * 100)
    }

    return id
}
 */
let recentCars = []
let count = 0

mock.recentCars.map( recent => {
    mock.cars.map( car => {
        if(recent.carId == car.id){
            recentCars.push({...car, observedBy:recent.userId, idE:count})
            count++
        }
    })
})


fs.writeFile("./mockdata.json", JSON.stringify(recentCars), function (err) {
    if (err) throw err;
});