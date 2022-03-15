import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-list-of-doctors',
  templateUrl: './admin-list-of-doctors.component.html',
  styleUrls: ['./admin-list-of-doctors.component.css']
})
export class AdminListOfDoctorsComponent implements OnInit {

  constructor(private service:DataService) { }
  doctors:any
  ngOnInit() {
    let ob=this.service.allDoctorList()
    ob.subscribe((res)=>{
      this.doctors=res
    })
  }

}
