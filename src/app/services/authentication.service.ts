import { AuxiliarService } from './auxiliar.service';
import { Injectable } from '@angular/core';
import { users } from '../mockData'
import { BehaviorSubject, Observable } from 'rxjs'
import { User } from '../interfaces'
import moment from 'moment'
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    
    private currentUserSubject: BehaviorSubject<User> = null
     
    constructor(private router:Router, private auxiliarService:AuxiliarService) {

        if(this.isExpired()){
           
            this.currentUserSubject = new BehaviorSubject<User>(null);
            this.logout();
            
        } else {
           
            this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        
        }
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username, password):User {

        let user:User = null
        
        users.forEach(u => {
            u.username == username && u.password == password ? user = u : null
        })

        let userData = {idToken:'abcdefg', expiresIn:10000, user:user}    
        this.setSession(userData)
        this.currentUserSubject.next(user)

        user ? this.router.navigateByUrl('/') : null

        return user
        
    }

    logout() {
      
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        localStorage.removeItem("currentUser");
        this.currentUserSubject.next(null);

        this.auxiliarService.logout()

        this.router.navigateByUrl('/')

    }

    private setSession(authResult) {

        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
        localStorage.setItem('currentUser', JSON.stringify(authResult.user));

    }   

    public isLoggedIn() : boolean{
        return moment().isBefore(this.getExpiration());
    }

    public isExpired() {
        return moment().isAfter(this.getExpiration());
    }

    public isLoggedOut() :boolean {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        
        return moment(expiresAt);
    }    
}