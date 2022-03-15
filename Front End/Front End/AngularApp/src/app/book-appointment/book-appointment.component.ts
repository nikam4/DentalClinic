import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { stringify } from 'querystring';
import { doctor } from '../_models/doctor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  
  appointment={
    patientName:"",date:"",mobile:"",status:"n",timeslot:{id:""}
  }
  timeslots:any
  drid:any
  doctors:any
  
  constructor(private service:DataService,private router:Router) {
    let ob=this.service.allDoctors()
    ob.subscribe((result)=>{
      this.doctors=result;
      this.temp()
    })

   }
   temp()
   {
    console.log(this.doctors)

   }
  
  ngOnInit() {
    // let ob1=this.service.getAllTimeslots()
    // ob1.subscribe((result)=>{
    //   // this.timeslots=result
    //   localStorage.setItem('timeslot',JSON.stringify(result))
    // })
    // this.timeslots=JSON.parse(localStorage.getItem('timeslot'))
    // console.log(this.timeslots)

  }

  getTimeslot()
  {
    let ob=this.service.getTimeslots(this.drid);
    ob.subscribe((result)=>{
      this.timeslots=result;
    })
  }

  onSubmit()
  {
    if(this.appointment.patientName.length!=0 && this.appointment.mobile.length!=0 && this.appointment.date.length!=0 && this.appointment.timeslot.id.length!=0)
    {
      console.log(this.appointment)
      let a=this.service.addAppointment(this.appointment,JSON.parse(localStorage.getItem('user')).email,this.drid);
      a.subscribe((res)=>
      {
          alert("Appointment booked")
          this.router.navigate(['/profile']);
      });
    }
    else
    {
      alert("Enter all the fields")
    }
    
  }
}
