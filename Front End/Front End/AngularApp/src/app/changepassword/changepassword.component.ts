import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  user:any

  constructor(
    private router: Router,private data:DataService
    ) { }
  pass:any
  cpass:any
  curpasswd:any
  
  ngOnInit() {
    let observableResult= this.data.getUser(localStorage.getItem('email'));
      observableResult.subscribe((result)=>{
        this.user=result;
        // this.curpasswd=this.user.password;
      })
  }
  update()
  {
    if(this.user.password==this.curpasswd)
    {
      if(this.pass==this.cpass)
      {
          this.user.password=this.pass;
          console.log(this.user);
         if(this.data.changePassword(this.user))
         {
          this.router.navigate(['/profile']);
         }
      }
      else
      {
        alert("Password doesn't match")
      }
    }
    else
    {
      alert("Wrong current password")
    }
    
    
  }
}

