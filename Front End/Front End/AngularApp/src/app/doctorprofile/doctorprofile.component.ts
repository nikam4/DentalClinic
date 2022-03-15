import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent implements OnInit {

  constructor(private service:DataService) { }
  doctor:any
  ngOnInit() {
    this.doctorinfo()
  }

  doctorinfo()
  {
    let ob=this.service.getUser(JSON.parse(localStorage.getItem('user')).email)
    ob.subscribe((result=>{
      // localStorage.setItem('updoctor',JSON.stringify(result))
      this.doctor=result
      console.log(result)
      console.log(this.doctor)
    }))

    //  (JSON.parse(localStorage.getItem('user')))
    //  this.doctor=JSON.parse(localStorage.getItem('updoctor'))
  }


}
