import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-appointment-list',
  templateUrl: './admin-appointment-list.component.html',
  styleUrls: ['./admin-appointment-list.component.css']
})
export class AdminAppointmentListComponent implements OnInit {

  constructor(private service:DataService) { }
  appointments:any
  ngOnInit() {
    let ob=this.service.getAllAppointments()
    ob.subscribe((result)=>{
      this.appointments=result
      console.log(this.appointments)
    })
  }

}
