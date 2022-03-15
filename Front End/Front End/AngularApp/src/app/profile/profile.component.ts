import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:DataService) { }
user:any
  ngOnInit() {
    let ob=this.service.getUser(JSON.parse(localStorage.getItem('user')).email)
    ob.subscribe((result)=>{
      this.user=result
    })
  }

}
