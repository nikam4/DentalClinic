import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({providedIn: 'root'})
export class AuthService implements CanActivate 
{
  constructor(private router:Router,private service:DataService) 
  {

  }
  canActivate()
  {
    if(this.isLoggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(['home'])
    }
  }

  isLoggedIn()
  {
    if(window.sessionStorage.getItem("login_status")!=null &&
      window.sessionStorage.getItem("login_status")=="1")
      {
        return true;
      }
      else
      {
        return false;
      }
  }

  

  SignOut()
  {
    window.sessionStorage.removeItem("login_status");
    localStorage.removeItem('user');
    localStorage.removeItem("flag");

  }
  
}
