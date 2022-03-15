import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-doctor-appointment-list',
  templateUrl: './doctor-appointment-list.component.html',
  styleUrls: ['./doctor-appointment-list.component.css']
})
export class DoctorAppointmentListComponent implements OnInit {

  constructor(private service:DataService) { }
  appointments:any

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('user')).email)
    let ob=this.service.getAppointmentsOfThisDoctor(JSON.parse(localStorage.getItem('user')).email);
    ob.subscribe((result)=>{
      this.appointments=result;
      console.log(this.appointments)
    })
  }
 
}
