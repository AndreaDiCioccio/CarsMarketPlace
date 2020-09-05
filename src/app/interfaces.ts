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

export interface BrandCB {
    id:number
    name:string
    checked:boolean
    count:number
}

export interface TypeCB extends BrandCB {}

export interface UserRatings {
    userId:number
    ratings:number[]
}