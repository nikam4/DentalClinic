import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-change-appointment-status',
  templateUrl: './change-appointment-status.component.html',
  styleUrls: ['./change-appointment-status.component.css']
})
export class ChangeAppointmentStatusComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:DataService,private router:Router) { }
  appos:any;
  appointment:any
  // {
  //   patientName:"",
  //   doc:{firstName:""},
  //   date:"",
  //   status:"",
  //   timeslot:{time:""},
  //   user:"",
  //   mobile:""
  // }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
      let ob=this.service.getAppointmentsOfThisDoctor(JSON.parse(localStorage.getItem('user')).email)
      ob.subscribe((res)=>{
        this.appos=res
      
      // console.log(this.appos)
      this.appos.forEach(element => {
        if (element.id==result.get('app.id')) {
          this.appointment=element
          console.log(this.appointment)
        }
      });
    })
  })
  }
  onSubmit()
  {
   let ob= this.service.updateAppointmentStatus(this.appointment)
   ob.subscribe((result)=>{
     console.log(result)
     this.router.navigate(['/drappointmentlist'])
   })
  }
}
