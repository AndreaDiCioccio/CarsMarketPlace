import { ConteinerGalleryComponent } from './../../conteiners/conteiner-gallery/conteiner-gallery.component';
import { style } from '@angular/animations';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   
    formLogin:FormGroup
    submitted:boolean
    isLoggedIn:boolean

    constructor( public authService:AuthenticationService,
                private formBuilder: FormBuilder) { }

    ngOnInit(): void {

        this.formLogin = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.isLoggedIn = this.authService.isLoggedIn()

    }

    get f() { return this.formLogin.controls }

    login():void{

        this.submitted = true

        let username = this.formLogin.controls['username'].value
        let password = this.formLogin.controls['password'].value
        
        this.authService.login(username, password )

        this.isLoggedIn = this.authService.isLoggedIn()
    
    }

    logout():void{
        this.authService.logout()
        this.isLoggedIn = this.authService.isLoggedIn()
    }

    showLoginInterface():void{
        let element = document.getElementById('drop-down-login')
        element.style.display = 'block'
    }

    showUserInterface():void{
        let element = document.getElementById('drop-down-user')
        element.style.display = 'block'
    }

    closeLoginInterface():void{
        let element = document.getElementById('drop-down-login')
        element.style.display = 'none'
    }

    closeUserInterface():void{
        let element = document.getElementById('drop-down-user')
        element.style.display = 'none'
    }

}
