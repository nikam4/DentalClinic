import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-admin-profile',
  templateUrl: './edit-admin-profile.component.html',
  styleUrls: ['./edit-admin-profile.component.css']
})
export class EditAdminProfileComponent implements OnInit {

  constructor(private data:DataService,private router:Router) { }
user:any
  ngOnInit() {
    let ob=this.data.getUser(JSON.parse(localStorage.getItem('user')).email)
    ob.subscribe((result)=>{
      this.user=result
    })
  }
  update()
  {
    console.log(this.user)
    let observableResult= this.data.updateUser(this.user);
    observableResult.subscribe((result)=>{
      console.log(result);
      alert("Profile updated")
      this.router.navigate(['/admin']);
    })
  }


}
