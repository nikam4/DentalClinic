import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-checkuserappointments',
  templateUrl: './checkuserappointments.component.html',
  styleUrls: ['./checkuserappointments.component.css']
})
export class CheckuserappointmentsComponent implements OnInit {

  constructor(private service:DataService) { }
  appointments:any

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('user')).email)
    let ob=this.service.getAppointmentsOfThisUser(JSON.parse(localStorage.getItem('user')).email);
    ob.subscribe((result)=>{
      this.appointments=result;
      console.log(this.appointments)
    })
  }
 
}
