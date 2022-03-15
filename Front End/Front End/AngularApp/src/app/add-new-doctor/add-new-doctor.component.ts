import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-doctor',
  templateUrl: './add-new-doctor.component.html',
  styleUrls: ['./add-new-doctor.component.css']
})
export class AddNewDoctorComponent implements OnInit {

  constructor(private service:DataService,private router:Router) { }
  doctor={
    firstName:"",
    middleName:"",
    lastName:"",
    address:"",
    email:"",
    password:"",
    age:"",
    mobileNo:"",
    dob:"",
    gender:"",
    role:"DOCTOR"
  }
  ngOnInit() {
  }
  insert()
  {
    console.log("==============")
    let ob=this.service.insertUser(this.doctor)
    ob.subscribe((res)=>{
      console.log(res)
      alert("Doctor Added")
      this.router.navigate(['/doctorslist'])
    })
  }
}
