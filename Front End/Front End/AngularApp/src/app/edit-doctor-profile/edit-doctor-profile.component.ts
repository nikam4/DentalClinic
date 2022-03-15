import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-doctor-profile',
  templateUrl: './edit-doctor-profile.component.html',
  styleUrls: ['./edit-doctor-profile.component.css']
})
export class EditDoctorProfileComponent implements OnInit {

  constructor(private service:DataService,private router:Router) { }
  user:any
  ngOnInit() {
    this.getDoctorData();
  }
  getDoctorData()
  {
    let ob=this.service.getUser(JSON.parse(localStorage.getItem('user')).email)
    ob.subscribe((result)=>{
      this.user=result
    })
  }
  update()
  {
    
    let ob=this.service.updateUser(this.user)
    ob.subscribe((result=>{
      // localStorage.setItem('user',JSON.stringify(result))
      
      alert("Profile updated")
        this.router.navigate(['/drprofile']);        
    }))

    
  }
  


}
