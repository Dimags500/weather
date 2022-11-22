import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({
    providedIn : 'root'
})

export class AuthGuard implements CanActivate {

    constructor(private  router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        let user = localStorage.getItem('currentUser');
        if(user){
            let token =JSON.parse(user!).token;
            if(token.length > 100)
                return true;
        }
     
        this.router.navigate(['/login']);
       return false ;
    }

}