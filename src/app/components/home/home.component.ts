import { Component, OnInit } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger('show-hide', [
            state('show', style({
                opacity:1
            })),
            state('hide', style({
                opacity:0
            })),
            transition('hide => show', [
                animate('1500ms 500ms ease-in') //duration, delay, easing(accelerates and decelerates)
            ]),
            transition('show => hide', [
                animate('0.8s 0.5s ease-out') //duration, delay, easing
            ])
        ])
    ]
})
export class HomeComponent implements OnInit{

    phrase1:string = 'hide'
    phrase2:string = 'hide'
    phrase3:string = 'hide'
    phrase4:string = 'hide'
    phrase5:string = 'hide'
    phrase6:string = 'hide'

    ngOnInit():void{

        setTimeout(() => {
            this.phrase1 = 'show'
        }, 1000);

    }

    animationPhraseDone(event:any, phrase:string){
        
        if(event.toState == "show"){

            setTimeout(() => {

                switch(phrase){

                    case 'phrase1':
                        this.phrase2 = 'show'
                        this.phrase1 = 'hide'
                        break

                    case 'phrase2':
                        this.phrase3 = 'show'
                        this.phrase2 = 'hide'
                        break

                    case 'phrase3':
                        this.phrase4 = 'show'
                        this.phrase3 = 'hide'
                        break

                    case 'phrase4':
                        this.phrase5 = 'show'
                        this.phrase4 = 'hide'
                        break

                    case 'phrase5':
                        this.phrase6 = 'show'
                        this.phrase5 = 'hide'
                        break

                    case 'phrase6':
                        this.phrase1 = 'show'
                        this.phrase6 = 'hide'
                        break

                }
            }, 6000);

        }

    }

}
