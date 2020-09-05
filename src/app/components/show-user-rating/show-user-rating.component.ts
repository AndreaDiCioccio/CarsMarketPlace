import { environment, imagesUrl } from './../../../environments/environment';
import { User } from './../../interfaces';
import { Component, Input, OnInit } from '@angular/core';



@Component({
    selector: 'app-show-user-rating',
    templateUrl: './show-user-rating.component.html',
    styleUrls: ['./show-user-rating.component.css']
})
export class ShowUserRatingComponent implements OnInit{

    @Input() user:User

    yellowStar:string = imagesUrl + "yellow-star.jpg";
    midStar:string = imagesUrl + "mid-star.jpg";
    greyStar:string = imagesUrl + "grey-star.jpg";
    
    ratingArray:string[] = new Array;
    
    ngOnInit():void{

        this.buildRatingsStars()

    }

    buildRatingsStars():void{

        let ratingArray:string[] = new Array;

        if(this.user.rating.value == 0){

            for(let k=0;k<=4;k++){
                ratingArray[k] = this.greyStar;
            }

            this.ratingArray = ratingArray

        }else{

            let rating = this.user.rating.value
            let count = this.user.rating.count
            
            let trunc = Math.trunc(rating);
                    
            for(let j=0;j<trunc+1;j++){
        
                if(rating>j && rating<j+1){
                    ratingArray[j] = this.midStar;
                }else {
                    if(j!=trunc){
                        ratingArray[j] = this.yellowStar;
                    }
                }
            
            }
        
            if (rating == Math.floor(rating)){
                for(let k=trunc;k<=4;k++){
                ratingArray[k] = this.greyStar;
                }
            } else {
                for(let k=trunc+1;k<=4;k++){
                ratingArray[k] = this.greyStar;
                }
            }

            this.ratingArray = ratingArray

        }

    }

}
