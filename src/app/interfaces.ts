export interface Car{
    id:number
    brand:string
    model:string
    type:string
    price:number
    discount:number
    image1:string
    image2:string
    image3:string
    userId:number
    username:string
    observed?:boolean
}

export interface CarWithCount extends Car {
    count?:number
}

export interface User{
    id:number
    username:string
    password?:string
    firstName?:string
    lastName?:string
    email?:string
    rating?: {
        value:number
        count:number
    }
}

export interface RecentSeenCar extends Car{
    observedBy:number
    entityId:number
}

export interface ObservedCar{
    id:number
    userId:number
    carId:number
}

export interface BrandCB {
    id:number
    name:string
    checked:boolean
    count:number
}

export interface TypeCB extends BrandCB {}

export interface UserRating {
    id:number
    userId:number
    value:number
}

export interface Rating {
    value:number
    count:number
}
