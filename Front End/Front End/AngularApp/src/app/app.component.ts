import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public service:AuthService,public router:Router,private data:DataService)
  {
  }
  // user:any
  ngOnInit()
  {
  }
  user:any



  authPatient()
  {
    if(this.service.isLoggedIn()==true && this.isPatient()==true)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  authAdmin()
  {
    if(this.service.isLoggedIn()==true && this.isAdmin()==true)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  authDoctor()
  {
    if(this.service.isLoggedIn()==true && this.isDoctor()==true)
    {
      return true;
    }
    else
    {
      return false;
    }
  }


  isPatient()
  {
    this.user=JSON.parse(localStorage.getItem('user'))

    if(this.user.role=="PATIENT")
    {
      return true
    }
    else
    {
      return false
    }
  }

  isDoctor()
  {
  
    this.user=JSON.parse(localStorage.getItem('user'))
    if(this.user.role=="DOCTOR")
    {
      return true
    }
    else
    {
      return false
    }
  }

  isAdmin()
  {
    this.user=JSON.parse(localStorage.getItem('user'))

    if(this.user.role=="ADMIN")
    {
      return true
    }
    else
    {
      return false
    }
  }

  logout()
  {
      this.service.SignOut();
      this.router.navigate(['login']); 
  }
}
