export let buyedCars = []

export let brands = [
    {id:0, name:'AUDI', checked:false, count:4},
    {id:1, name:'BMW', checked:false, count:7},
    {id:2, name:'FERRARI', checked:false, count:4},
    {id:3, name:'FIAT', checked:false, count:5},
    {id:4, name:'MASERATI', checked:false, count:5}
]

export let types = [
    {id:0, name:'Berlina', checked:false, count:9},
    {id:1, name:'CityCar', checked:false, count:2},
    {id:2, name:'Jeep', checked:false, count:5},
    {id:3, name:'Sportiva', checked:false, count:8},
    {id:4, name:'SUV', checked:false, count:1}
]

export let cars = [
    {
        "id": 0,
        "brand": "MASERATI",
        "model": "Ghibli",
        "type": "Sportiva",
        "price": 71000,
        "discount": 10,
        "image1": "maserati_ghibli_img1.jpg",
        "image2": "maserati_ghibli_img2.jpg",
        "image3": "maserati_ghibli_img3.jpg",
        "userId": 1,
        "username": "JoeVan"
    },
    {
        "id": 1,
        "brand": "BMW",
        "model": "Serie 1",
        "type": "Berlina",
        "price": 27000,
        "discount": 4,
        "image1": "bmw_serie1_img1.jpg",
        "image2": "bmw_serie1_img2.jpg",
        "image3": "bmw_serie1_img3.jpg",
        "userId": 0,
        "username": "StanfRei"
    },
    {
        "id": 2,
        "brand": "FERRARI",
        "model": "F40",
        "type": "Sportiva",
        "price": 900000,
        "discount": 13,
        "image1": "ferrari_f40_img1.jpg",
        "image2": "ferrari_f40_img2.jpg",
        "image3": "ferrari_f40_img3.jpg",
        "userId": 1,
        "username": "JoeVan"
    },
    {
        "id": 3,
        "brand": "FERRARI",
        "model": "Portofino",
        "type": "Sportiva",
        "price": 195000,
        "discount": 14,
        "image1": "ferrari_portofino_img1.jpg",
        "image2": "ferrari_portofino_img2.jpg",
        "image3": "ferrari_portofino_img3.jpg",
        "userId": 2,
        "username": "AmparLed"
    },
    {
        "id": 4,
        "brand": "AUDI",
        "model": "Q7",
        "type": "Jeep",
        "price": 70000,
        "discount": 14,
        "image1": "audi_Q7_img1.jpg",
        "image2": "audi_Q7_img2.jpg",
        "image3": "audi_Q7_img3.jpg",
        "userId": 3,
        "username": "KobyNik"
    },
    {
        "id": 5,
        "brand": "FERRARI",
        "model": "Portofino",
        "type": "Sportiva",
        "price": 195000,
        "discount": 0,
        "image1": "ferrari_portofino_img1.jpg",
        "image2": "ferrari_portofino_img2.jpg",
        "image3": "ferrari_portofino_img3.jpg",
        "userId": 2,
        "username": "AmparLed"
    },
    {
        "id": 6,
        "brand": "FIAT",
        "model": "500 X Lounge",
        "type": "Berlina",
        "price": 21600,
        "discount": 0,
        "image1": "fiat_500XLounge_img1.jpg",
        "image2": "fiat_500XLounge_img2.jpg",
        "image3": "fiat_500XLounge_img3.jpg",
        "userId": 3,
        "username": "KobyNik"
    },
    {
        "id": 7,
        "brand": "BMW",
        "model": "X5",
        "type": "Jeep",
        "price": 67000,
        "discount": 18,
        "image1": "bmw_x5_img1.jpg",
        "image2": "bmw_x5_img2.jpg",
        "image3": "bmw_x5_img3.jpg",
        "userId": 3,
        "username": "KobyNik"
    },
    {
        "id": 8,
        "brand": "BMW",
        "model": "X5",
        "type": "Jeep",
        "price": 67000,
        "discount": 16,
        "image1": "bmw_x5_img1.jpg",
        "image2": "bmw_x5_img2.jpg",
        "image3": "bmw_x5_img3.jpg",
        "userId": 4,
        "username": "KiaraMur"
    },
    {
        "id": 9,
        "brand": "AUDI",
        "model": "A1",
        "type": "Berlina",
        "price": 22000,
        "discount": 7,
        "image1": "audi_A1_img1.jpg",
        "image2": "audi_A1_img2.jpg",
        "image3": "audi_A1_img3.jpg",
        "userId": 2,
        "username": "AmparLed"
    },
    {
        "id": 10,
        "brand": "FIAT",
        "model": "500",
        "type": "CityCar",
        "price": 10900,
        "discount": 19,
        "image1": "fiat_500_img1.jpg",
        "image2": "fiat_500_img2.jpg",
        "image3": "fiat_500_img3.jpg",
        "userId": 1,
        "username": "JoeVan"
    },
    {
        "id": 11,
        "brand": "AUDI",
        "model": "A1",
        "type": "Berlina",
        "price": 22000,
        "discount": 15,
        "image1": "audi_A1_img1.jpg",
        "image2": "audi_A1_img2.jpg",
        "image3": "audi_A1_img3.jpg",
        "userId": 1,
        "username": "JoeVan"
    },
    {
        "id": 12,
        "brand": "FIAT",
        "model": "500",
        "type": "CityCar",
        "price": 10900,
        "discount": 10,
        "image1": "fiat_500_img1.jpg",
        "image2": "fiat_500_img2.jpg",
        "image3": "fiat_500_img3.jpg",
        "userId": 1,
        "username": "JoeVan"
    },
    {
        "id": 13,
        "brand": "FERRARI",
        "model": "Portofino",
        "type": "Sportiva",
        "price": 195000,
        "discount": 3,
        "image1": "ferrari_portofino_img1.jpg",
        "image2": "ferrari_portofino_img2.jpg",
        "image3": "ferrari_portofino_img3.jpg",
        "userId": 4,
        "username": "KiaraMur"
    },
    {
        "id": 14,
        "brand": "FIAT",
        "model": "500 X Lounge",
        "type": "Berlina",
        "price": 21600,
        "discount": 4,
        "image1": "fiat_500XLounge_img1.jpg",
        "image2": "fiat_500XLounge_img2.jpg",
        "image3": "fiat_500XLounge_img3.jpg",
        "userId": 4,
        "username": "KiaraMur"
    },
    {
        "id": 15,
        "brand": "BMW",
        "model": "X5",
        "type": "Jeep",
        "price": 67000,
        "discount": 11,
        "image1": "bmw_x5_img1.jpg",
        "image2": "bmw_x5_img2.jpg",
        "image3": "bmw_x5_img3.jpg",
        "userId": 4,
        "username": "KiaraMur"
    },
    {
        "id": 19,
        "brand": "BMW",
        "model": "X5",
        "type": "Jeep",
        "price": 67000,
        "discount": 14,
        "image1": "bmw_x5_img1.jpg",
        "image2": "bmw_x5_img2.jpg",
        "image3": "bmw_x5_img3.jpg",
        "userId": 2,
        "username": "AmparLed"
    },
    {
        "id": 20,
        "brand": "MASERATI",
        "model": "Ghibli",
        "type": "Sportiva",
        "price": 71000,
        "discount": 13,
        "image1": "maserati_ghibli_img1.jpg",
        "image2": "maserati_ghibli_img2.jpg",
        "image3": "maserati_ghibli_img3.jpg",
        "userId": 0,
        "username": "StanfRei"
    },
    {
        "id": 21,
        "brand": "MASERATI",
        "model": "MC 20",
        "type": "Sportiva",
        "price": 200000,
        "discount": 13,
        "image1": "maserati_mc20_img1.jpg",
        "image2": "maserati_mc20_img2.jpg",
        "image3": "maserati_mc20_img3.jpg",
        "userId": 3,
        "username": "KobyNik"
    },
    {
        "id": 23,
        "brand": "AUDI",
        "model": "A1",
        "type": "Berlina",
        "price": 22000,
        "discount": 3,
        "image1": "audi_A1_img1.jpg",
        "image2": "audi_A1_img2.jpg",
        "image3": "audi_A1_img3.jpg",
        "userId": 2,
        "username": "AmparLed"
    },
    {
        "id": 24,
        "brand": "MASERATI",
        "model": "MC 20",
        "type": "Sportiva",
        "price": 200000,
        "discount": 3,
        "image1": "maserati_mc20_img1.jpg",
        "image2": "maserati_mc20_img2.jpg",
        "image3": "maserati_mc20_img3.jpg",
        "userId": 0,
        "username": "StanfRei"
    },
    {
        "id": 25,
        "brand": "FIAT",
        "model": "500 X Lounge",
        "type": "Berlina",
        "price": 21600,
        "discount": 15,
        "image1": "fiat_500_img1.jpg",
        "image2": "fiat_500_img2.jpg",
        "image3": "fiat_500_img3.jpg",
        "userId": 3,
        "username": "KobyNik"
    },
    {
        "id": 26,
        "brand": "BMW",
        "model": "Serie 1",
        "type": "Berlina",
        "price": 27000,
        "discount": 10,
        "image1": "bmw_serie1_img1.jpg",
        "image2": "bmw_serie1_img2.jpg",
        "image3": "bmw_serie1_img3.jpg",
        "userId": 0,
        "username": "StanfRei"
    },
    {
        "id": 27,
        "brand": "MASERATI",
        "model": "Levante",
        "type": "SUV",
        "price": 75900,
        "discount": 4,
        "image1": "maserati_levante_img1.jpg",
        "image2": "maserati_levante_img2.jpg",
        "image3": "maserati_levante_img3.jpg",
        "userId": 4,
        "username": "KiaraMur"
    },
    {
        "id": 28,
        "brand": "BMW",
        "model": "Serie 1",
        "type": "Berlina",
        "price": 27000,
        "discount": 8,
        "image1": "bmw_serie1_img1.jpg",
        "image2": "bmw_serie1_img2.jpg",
        "image3": "bmw_serie1_img3.jpg",
        "userId": 0,
        "username": "StanfRei"
    }
]

export let users = [
    {
        "id": 0,
        "firstName": "Stanford",
        "lastName": "Reilly",
        "username": "StanfRei",
        "password": "StanfRei",
        "email": "StanfRei@.email.com",
        
    },
    {
        "id": 1,
        "firstName": "Joe",
        "lastName": "Vandervort",
        "username": "JoeVan",
        "password": "JoeVan",
        "email": "JoeVan@.email.com",
        
    },
    {
        "id": 2,
        "firstName": "Amparo",
        "lastName": "Ledner",
        "username": "AmparLed",
        "password": "AmparLed",
        "email": "AmparLed@.email.com",
       
    },
    {
        "id": 3,
        "firstName": "Koby",
        "lastName": "Nikolaus",
        "username": "KobyNik",
        "password": "KobyNik",
        "email": "KobyNik@.email.com",
        
    },
    {
        "id": 4,
        "firstName": "Kiara",
        "lastName": "Murray",
        "username": "KiaraMur",
        "password": "KiaraMur",
        "email": "KiaraMur@.email.com",
       
    }
]

export let observedCars = [
    {
      id: 0,
      userId: 0,
      carId: 2
    },
    {
      id: 1,
      userId: 0,
      carId: 5
    },
    {
      id: 2,
      userId: 0,
      carId: 3
    },
    {
      id: 3,
      userId: 0,
      carId: 9
    },
    {
      id: 4,
      userId: 0,
      carId: 12
    },
    {
      id: 5,
      userId: 1,
      carId: 9
    },
    {
      id: 6,
      userId: 1,
      carId: 14
    },
    {
      id: 7,
      userId: 1,
      carId: 15
    },
    {
      id: 8,
      userId: 1,
      carId: 12
    },
    {
      id: 9,
      userId: 1,
      carId: 12
    },
    {
      id: 10,
      userId: 2,
      carId: 13
    },
    {
      id: 11,
      userId: 2,
      carId: 16
    },
    {
      id: 12,
      userId: 2,
      carId: 11
    },
    {
      id: 13,
      userId: 2,
      carId: 9
    },
    {
      id: 14,
      userId: 2,
      carId: 11
    },
    {
      id: 15,
      userId: 3,
      carId: 0
    },
    {
      id: 16,
      userId: 3,
      carId: 7
    },
    {
      id: 17,
      userId: 3,
      carId: 3
    },
    {
      id: 18,
      userId: 3,
      carId: 14
    },
    {
      id: 19,
      userId: 3,
      carId: 21
    },
    {
      id: 20,
      userId: 4,
      carId: 5
    },
    {
      id: 21,
      userId: 4,
      carId: 2
    },
    {
      id: 22,
      userId: 4,
      carId: 5
    },
    {
      id: 23,
      userId: 4,
      carId: 7
    },
    {
      id: 24,
      userId: 4,
      carId: 17
    }
  ]

  export let usersRatings = [
    {
      id: 0,
      userId: 0,
      value: 3
    },
    {
      id: 1,
      userId: 0,
      value: 4
    },
    {
      id: 2,
      userId: 0,
      value: 1
    },
    {
      id: 3,
      userId: 0,
      value: 1
    },
    {
      id: 4,
      userId: 0,
      value: 1
    },
    {
      id: 5,
      userId: 0,
      value: 4
    },
    {
      id: 6,
      userId: 0,
      value: 3
    },
    {
      id: 7,
      userId: 0,
      value: 1
    },
    {
      id: 8,
      userId: 0,
      value: 4
    },
    {
      id: 9,
      userId: 0,
      value: 4
    },
    {
      id: 10,
      userId: 1,
      value: 3
    },
    {
      id: 11,
      userId: 1,
      value: 2
    },
    {
      id: 12,
      userId: 1,
      value: 3
    },
    {
      id: 13,
      userId: 1,
      value: 4
    },
    {
      id: 14,
      userId: 1,
      value: 2
    },
    {
      id: 15,
      userId: 1,
      value: 1
    },
    {
      id: 16,
      userId: 1,
      value: 1
    },
    {
      id: 17,
      userId: 1,
      value: 4
    },
    {
      id: 18,
      userId: 1,
      value: 5
    },
    {
      id: 19,
      userId: 1,
      value: 4
    },
    {
      id: 20,
      userId: 2,
      value: 2
    },
    {
      id: 21,
      userId: 2,
      value: 2
    },
    {
      id: 22,
      userId: 2,
      value: 3
    },
    {
      id: 23,
      userId: 2,
      value: 1
    },
    {
      id: 24,
      userId: 2,
      value: 1
    },
    {
      id: 25,
      userId: 2,
      value: 4
    },
    {
      id: 26,
      userId: 2,
      value: 2
    },
    {
      id: 27,
      userId: 2,
      value: 4
    },
    {
      id: 28,
      userId: 2,
      value: 4
    },
    {
      id: 29,
      userId: 2,
      value: 2
    },
    {
      id: 30,
      userId: 3,
      value: 5
    },
    {
      id: 31,
      userId: 3,
      value: 1
    },
    {
      id: 32,
      userId: 3,
      value: 4
    },
    {
      id: 33,
      userId: 3,
      value: 1
    },
    {
      id: 34,
      userId: 3,
      value: 3
    },
    {
      id: 35,
      userId: 3,
      value: 5
    },
    {
      id: 36,
      userId: 3,
      value: 5
    },
    {
      id: 37,
      userId: 3,
      value: 1
    },
    {
      id: 38,
      userId: 3,
      value: 3
    },
    {
      id: 39,
      userId: 3,
      value: 1
    },
    {
      id: 40,
      userId: 4,
      value: 1
    },
    {
      id: 41,
      userId: 4,
      value: 2
    },
    {
      id: 42,
      userId: 4,
      value: 2
    },
    {
      id: 43,
      userId: 4,
      value: 1
    },
    {
      id: 44,
      userId: 4,
      value: 1
    },
    {
      id: 45,
      userId: 4,
      value: 2
    },
    {
      id: 46,
      userId: 4,
      value: 5
    },
    {
      id: 47,
      userId: 4,
      value: 1
    },
    {
      id: 48,
      userId: 4,
      value: 3
    },
    {
      id: 49,
      userId: 4,
      value: 5
    }
  ]

  export let recentSeenCars = [
    {
      id: 0,
      brand: 'MASERATI',
      model: 'Ghibli',
      type: 'Sportiva',
      price: 71000,
      discount: 10,
      image1: 'maserati_ghibli_img1.jpg',
      image2: 'maserati_ghibli_img2.jpg',
      image3: 'maserati_ghibli_img3.jpg',
      userId: 1,
      username: 'JoeVan',
      observedBy: 0,
      entityId: 0
    },
    {
      id: 20,
      brand: 'MASERATI',
      model: 'Ghibli',
      type: 'Sportiva',
      price: 71000,
      discount: 13,
      image1: 'maserati_ghibli_img1.jpg',
      image2: 'maserati_ghibli_img2.jpg',
      image3: 'maserati_ghibli_img3.jpg',
      userId: 0,
      username: 'StanfRei',
      observedBy: 0,
      entityId: 1
    },
    {
      id: 20,
      brand: 'MASERATI',
      model: 'Ghibli',
      type: 'Sportiva',
      price: 71000,
      discount: 13,
      image1: 'maserati_ghibli_img1.jpg',
      image2: 'maserati_ghibli_img2.jpg',
      image3: 'maserati_ghibli_img3.jpg',
      userId: 0,
      username: 'StanfRei',
      observedBy: 0,
      entityId: 2
    },
    {
      id: 8,
      brand: 'BMW',
      model: 'X5',
      type: 'Jeep',
      price: 67000,
      discount: 16,
      image1: 'bmw_x5_img1.jpg',
      image2: 'bmw_x5_img2.jpg',
      image3: 'bmw_x5_img3.jpg',
      userId: 4,
      username: 'KiaraMur',
      observedBy: 0,
      entityId: 3
    },
    {
      id: 15,
      brand: 'BMW',
      model: 'X5',
      type: 'Jeep',
      price: 67000,
      discount: 11,
      image1: 'bmw_x5_img1.jpg',
      image2: 'bmw_x5_img2.jpg',
      image3: 'bmw_x5_img3.jpg',
      userId: 4,
      username: 'KiaraMur',
      observedBy: 0,
      entityId: 4
    },
    {
      id: 23,
      brand: 'AUDI',
      model: 'A1',
      type: 'Berlina',
      price: 22000,
      discount: 3,
      image1: 'audi_A1_img1.jpg',
      image2: 'audi_A1_img2.jpg',
      image3: 'audi_A1_img3.jpg',
      userId: 2,
      username: 'AmparLed',
      observedBy: 0,
      entityId: 5
    },
    {
      id: 5,
      brand: 'FERRARI',
      model: 'Portofino',
      type: 'Sportiva',
      price: 195000,
      discount: 0,
      image1: 'ferrari_portofino_img1.jpg',
      image2: 'ferrari_portofino_img2.jpg',
      image3: 'ferrari_portofino_img3.jpg',
      userId: 2,
      username: 'AmparLed',
      observedBy: 0,
      entityId: 6
    },
    {
      id: 5,
      brand: 'FERRARI',
      model: 'Portofino',
      type: 'Sportiva',
      price: 195000,
      discount: 0,
      image1: 'ferrari_portofino_img1.jpg',
      image2: 'ferrari_portofino_img2.jpg',
      image3: 'ferrari_portofino_img3.jpg',
      userId: 2,
      username: 'AmparLed',
      observedBy: 0,
      entityId: 7
    },
    {
      id: 15,
      brand: 'BMW',
      model: 'X5',
      type: 'Jeep',
      price: 67000,
      discount: 11,
      image1: 'bmw_x5_img1.jpg',
      image2: 'bmw_x5_img2.jpg',
      image3: 'bmw_x5_img3.jpg',
      userId: 4,
      username: 'KiaraMur',
      observedBy: 0,
      entityId: 8
    },
    {
      id: 5,
      brand: 'FERRARI',
      model: 'Portofino',
      type: 'Sportiva',
      price: 195000,
      discount: 0,
      image1: 'ferrari_portofino_img1.jpg',
      image2: 'ferrari_portofino_img2.jpg',
      image3: 'ferrari_portofino_img3.jpg',
      userId: 2,
      username: 'AmparLed',
      observedBy: 1,
      entityId: 9
    },
    {
      id: 19,
      brand: 'BMW',
      model: 'X5',
      type: 'Jeep',
      price: 67000,
      discount: 14,
      image1: 'bmw_x5_img1.jpg',
      image2: 'bmw_x5_img2.jpg',
      image3: 'bmw_x5_img3.jpg',
      userId: 2,
      username: 'AmparLed',
      observedBy: 1,
      entityId: 10
    },
    {
      id: 7,
      brand: 'BMW',
      model: 'X5',
      type: 'Jeep',
      price: 67000,
      discount: 18,
      image1: 'bmw_x5_img1.jpg',
      image2: 'bmw_x5_img2.jpg',
      image3: 'bmw_x5_img3.jpg',
      userId: 3,
      username: 'KobyNik',
      observedBy: 1,
      entityId: 11
    },
    {
      id: 12,
      brand: 'FIAT',
      model: '500',
      type: 'CityCar',
      price: 10900,
      discount: 10,
      image1: 'fiat_500_img1.jpg',
      image2: 'fiat_500_img2.jpg',
      image3: 'fiat_500_img3.jpg',
      userId: 1,
      username: 'JoeVan',
      observedBy: 1,
      entityId: 12
    },
    {
      id: 8,
      brand: 'BMW',
      model: 'X5',
      type: 'Jeep',
      price: 67000,
      discount: 16,
      image1: 'bmw_x5_img1.jpg',
      image2: 'bmw_x5_img2.jpg',
      image3: 'bmw_x5_img3.jpg',
      userId: 4,
      username: 'KiaraMur',
      observedBy: 1,
      entityId: 13
    },
    {
      id: 20,
      brand: 'MASERATI',
      model: 'Ghibli',
      type: 'Sportiva',
      price: 71000,
      discount: 13,
      image1: 'maserati_ghibli_img1.jpg',
      image2: 'maserati_ghibli_img2.jpg',
      image3: 'maserati_ghibli_img3.jpg',
      userId: 0,
      username: 'StanfRei',
      observedBy: 1,
      entityId: 14
    },
    {
      id: 20,
      brand: 'MASERATI',
      model: 'Ghibli',
      type: 'Sportiva',
      price: 71000,
      discount: 13,
      image1: 'maserati_ghibli_img1.jpg',
      image2: 'maserati_ghibli_img2.jpg',
      image3: 'maserati_ghibli_img3.jpg',
      userId: 0,
      username: 'StanfRei',
      observedBy: 1,
      entityId: 15
    },
    {
      id: 20,
      brand: 'MASERATI',
      model: 'Ghibli',
      type: 'Sportiva',
      price: 71000,
      discount: 13,
      image1: 'maserati_ghibli_img1.jpg',
      image2: 'maserati_ghibli_img2.jpg',
      image3: 'maserati_ghibli_img3.jpg',
      userId: 0,
      username: 'StanfRei',
      observedBy: 1,
      entityId: 16
    },
    {
      id: 13,
      brand: 'FERRARI',
      model: 'Portofino',
      type: 'Sportiva',
      price: 195000,
      discount: 3,
      image1: 'ferrari_portofino_img1.jpg',
      image2: 'ferrari_portofino_img2.jpg',
      image3: 'ferrari_portofino_img3.jpg',
      userId: 4,
      username: 'KiaraMur',
      observedBy: 1,
      entityId: 17
    },
    {
      id: 20,
      brand: 'MASERATI',
      model: 'Ghibli',
      type: 'Sportiva',
      price: 71000,
      discount: 13,
      image1: 'maserati_ghibli_img1.jpg',
      image2: 'maserati_ghibli_img2.jpg',
      image3: 'maserati_ghibli_img3.jpg',
      userId: 0,
      username: 'StanfRei',
      observedBy: 1,
      entityId: 18
    },
    {
      id: 3,
      brand: 'FERRARI',
      model: 'Portofino',
      type: 'Sportiva',
      price: 195000,
      discount: 14,
      image1: 'ferrari_portofino_img1.jpg',
      image2: 'ferrari_portofino_img2.jpg',
      image3: 'ferrari_portofino_img3.jpg',
      userId: 2,
      username: 'AmparLed',
      observedBy: 2,
      entityId: 19
    },
    {
      id: 21,
      brand: 'MASERATI',
      model: 'MC 20',
      type: 'Sportiva',
      price: 200000,
      discount: 13,
      image1: 'maserati_mc20_img1.jpg',
      image2: 'maserati_mc20_img2.jpg',
      image3: 'maserati_mc20_img3.jpg',
      userId: 3,
      username: 'KobyNik',
      observedBy: 2,
      entityId: 20
    },
    {
      id: 19,
      brand: 'BMW',
      model: 'X5',
      type: 'Jeep',
      price: 67000,
      discount: 14,
      image1: 'bmw_x5_img1.jpg',
      image2: 'bmw_x5_img2.jpg',
      image3: 'bmw_x5_img3.jpg',
      userId: 2,
      username: 'AmparLed',
      observedBy: 2,
      entityId: 21
    },
    {
      id: 4,
      brand: 'AUDI',
      model: 'Q7',
      type: 'Jeep',
      price: 70000,
      discount: 14,
      image1: 'audi_Q7_img1.jpg',
      image2: 'audi_Q7_img2.jpg',
      image3: 'audi_Q7_img3.jpg',
      userId: 3,
      username: 'KobyNik',
      observedBy: 2,
      entityId: 22
    },
    {
      id: 15,
      brand: 'BMW',
      model: 'X5',
      type: 'Jeep',
      price: 67000,
      discount: 11,
      image1: 'bmw_x5_img1.jpg',
      image2: 'bmw_x5_img2.jpg',
      image3: 'bmw_x5_img3.jpg',
      userId: 4,
      username: 'KiaraMur',
      observedBy: 2,
      entityId: 23
    },
    {
      id: 11,
      brand: 'AUDI',
      model: 'A1',
      type: 'Berlina',
      price: 22000,
      discount: 15,
      image1: 'audi_A1_img1.jpg',
      image2: 'audi_A1_img2.jpg',
      image3: 'audi_A1_img3.jpg',
      userId: 1,
      username: 'JoeVan',
      observedBy: 2,
      entityId: 24
    },
    {
      id: 2,
      brand: 'FERRARI',
      model: 'F40',
      type: 'Sportiva',
      price: 900000,
      discount: 13,
      image1: 'ferrari_f40_img1.jpg',
      image2: 'ferrari_f40_img2.jpg',
      image3: 'ferrari_f40_img3.jpg',
      userId: 1,
      username: 'JoeVan',
      observedBy: 2,
      entityId: 25
    },
    {
      id: 23,
      brand: 'AUDI',
      model: 'A1',
      type: 'Berlina',
      price: 22000,
      discount: 3,
      image1: 'audi_A1_img1.jpg',
      image2: 'audi_A1_img2.jpg',
      image3: 'audi_A1_img3.jpg',
      userId: 2,
      username: 'AmparLed',
      observedBy: 2,
      entityId: 26
    },
    {
      id: 8,
      brand: 'BMW',
      model: 'X5',
      type: 'Jeep',
      price: 67000,
      discount: 16,
      image1: 'bmw_x5_img1.jpg',
      image2: 'bmw_x5_img2.jpg',
      image3: 'bmw_x5_img3.jpg',
      userId: 4,
      username: 'KiaraMur',
      observedBy: 2,
      entityId: 27
    },
    {
      id: 9,
      brand: 'AUDI',
      model: 'A1',
      type: 'Berlina',
      price: 22000,
      discount: 7,
      image1: 'audi_A1_img1.jpg',
      image2: 'audi_A1_img2.jpg',
      image3: 'audi_A1_img3.jpg',
      userId: 2,
      username: 'AmparLed',
      observedBy: 2,
      entityId: 28
    },
    {
      id: 0,
      brand: 'MASERATI',
      model: 'Ghibli',
      type: 'Sportiva',
      price: 71000,
      discount: 10,
      image1: 'maserati_ghibli_img1.jpg',
      image2: 'maserati_ghibli_img2.jpg',
      image3: 'maserati_ghibli_img3.jpg',
      userId: 1,
      username: 'JoeVan',
      observedBy: 3,
      entityId: 29
    },
    {
      id: 15,
      brand: 'BMW',
      model: 'X5',
      type: 'Jeep',
      price: 67000,
      discount: 11,
      image1: 'bmw_x5_img1.jpg',
      image2: 'bmw_x5_img2.jpg',
      image3: 'bmw_x5_img3.jpg',
      userId: 4,
      username: 'KiaraMur',
      observedBy: 3,
      entityId: 30
    },
    {
      id: 8,
      brand: 'BMW',
      model: 'X5',
      type: 'Jeep',
      price: 67000,
      discount: 16,
      image1: 'bmw_x5_img1.jpg',
      image2: 'bmw_x5_img2.jpg',
      image3: 'bmw_x5_img3.jpg',
      userId: 4,
      username: 'KiaraMur',
      observedBy: 3,
      entityId: 31
    },
    {
      id: 11,
      brand: 'AUDI',
      model: 'A1',
      type: 'Berlina',
      price: 22000,
      discount: 15,
      image1: 'audi_A1_img1.jpg',
      image2: 'audi_A1_img2.jpg',
      image3: 'audi_A1_img3.jpg',
      userId: 1,
      username: 'JoeVan',
      observedBy: 3,
      entityId: 32
    },
    {
      id: 9,
      brand: 'AUDI',
      model: 'A1',
      type: 'Berlina',
      price: 22000,
      discount: 7,
      image1: 'audi_A1_img1.jpg',
      image2: 'audi_A1_img2.jpg',
      image3: 'audi_A1_img3.jpg',
      userId: 2,
      username: 'AmparLed',
      observedBy: 3,
      entityId: 33
    },
    {
      id: 2,
      brand: 'FERRARI',
      model: 'F40',
      type: 'Sportiva',
      price: 900000,
      discount: 13,
      image1: 'ferrari_f40_img1.jpg',
      image2: 'ferrari_f40_img2.jpg',
      image3: 'ferrari_f40_img3.jpg',
      userId: 1,
      username: 'JoeVan',
      observedBy: 3,
      entityId: 34
    },
    {
      id: 21,
      brand: 'MASERATI',
      model: 'MC 20',
      type: 'Sportiva',
      price: 200000,
      discount: 13,
      image1: 'maserati_mc20_img1.jpg',
      image2: 'maserati_mc20_img2.jpg',
      image3: 'maserati_mc20_img3.jpg',
      userId: 3,
      username: 'KobyNik',
      observedBy: 3,
      entityId: 35
    },
    {
      id: 2,
      brand: 'FERRARI',
      model: 'F40',
      type: 'Sportiva',
      price: 900000,
      discount: 13,
      image1: 'ferrari_f40_img1.jpg',
      image2: 'ferrari_f40_img2.jpg',
      image3: 'ferrari_f40_img3.jpg',
      userId: 1,
      username: 'JoeVan',
      observedBy: 3,
      entityId: 36
    },
    {
      id: 24,
      brand: 'MASERATI',
      model: 'MC 20',
      type: 'Sportiva',
      price: 200000,
      discount: 3,
      image1: 'maserati_mc20_img1.jpg',
      image2: 'maserati_mc20_img2.jpg',
      image3: 'maserati_mc20_img3.jpg',
      userId: 0,
      username: 'StanfRei',
      observedBy: 3,
      entityId: 37
    },
    {
      id: 6,
      brand: 'FIAT',
      model: '500 X Lounge',
      type: 'Berlina',
      price: 21600,
      discount: 0,
      image1: 'fiat_500XLounge_img1.jpg',
      image2: 'fiat_500XLounge_img2.jpg',
      image3: 'fiat_500XLounge_img3.jpg',
      userId: 3,
      username: 'KobyNik',
      observedBy: 4,
      entityId: 38
    },
    {
      id: 15,
      brand: 'BMW',
      model: 'X5',
      type: 'Jeep',
      price: 67000,
      discount: 11,
      image1: 'bmw_x5_img1.jpg',
      image2: 'bmw_x5_img2.jpg',
      image3: 'bmw_x5_img3.jpg',
      userId: 4,
      username: 'KiaraMur',
      observedBy: 4,
      entityId: 39
    },
    {
      id: 0,
      brand: 'MASERATI',
      model: 'Ghibli',
      type: 'Sportiva',
      price: 71000,
      discount: 10,
      image1: 'maserati_ghibli_img1.jpg',
      image2: 'maserati_ghibli_img2.jpg',
      image3: 'maserati_ghibli_img3.jpg',
      userId: 1,
      username: 'JoeVan',
      observedBy: 4,
      entityId: 40
    },
    {
      id: 13,
      brand: 'FERRARI',
      model: 'Portofino',
      type: 'Sportiva',
      price: 195000,
      discount: 3,
      image1: 'ferrari_portofino_img1.jpg',
      image2: 'ferrari_portofino_img2.jpg',
      image3: 'ferrari_portofino_img3.jpg',
      userId: 4,
      username: 'KiaraMur',
      observedBy: 4,
      entityId: 41
    },
    {
      id: 0,
      brand: 'MASERATI',
      model: 'Ghibli',
      type: 'Sportiva',
      price: 71000,
      discount: 10,
      image1: 'maserati_ghibli_img1.jpg',
      image2: 'maserati_ghibli_img2.jpg',
      image3: 'maserati_ghibli_img3.jpg',
      userId: 1,
      username: 'JoeVan',
      observedBy: 4,
      entityId: 42
    },
    {
      id: 0,
      brand: 'MASERATI',
      model: 'Ghibli',
      type: 'Sportiva',
      price: 71000,
      discount: 10,
      image1: 'maserati_ghibli_img1.jpg',
      image2: 'maserati_ghibli_img2.jpg',
      image3: 'maserati_ghibli_img3.jpg',
      userId: 1,
      username: 'JoeVan',
      observedBy: 4,
      entityId: 43
    },
    {
      id: 15,
      brand: 'BMW',
      model: 'X5',
      type: 'Jeep',
      price: 67000,
      discount: 11,
      image1: 'bmw_x5_img1.jpg',
      image2: 'bmw_x5_img2.jpg',
      image3: 'bmw_x5_img3.jpg',
      userId: 4,
      username: 'KiaraMur',
      observedBy: 4,
      entityId: 44
    }
  ]
