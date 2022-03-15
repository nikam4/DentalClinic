import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user={"firstName":"","middleName":"","lastName":"","email":"","dob":"","address":"","age":"","mobileNo":"","password":"","gender":"","role":"PATIENT"};
  
  
  constructor(private root:ActivatedRoute,
              private router:Router,
              private service:DataService)
  { }

  ngOnInit() 
  {
    
  }
  message;
  insert()
  {
    if(this.user.firstName.length!=0 && this.user.lastName.length!=0 && this.user.mobileNo.length!=0 && this.user.password.length!=0)
    {
      console.log(this.user);
      let observableResult= this.service.insertUser(this.user);
      observableResult.subscribe((result)=>{
        console.log(result);
        this.router.navigate(['/login']);
        alert("Registration successfull...")
      })
    }
  else
    {
      alert("Enter all the fields")
    }
    
   }
  }
