import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private data:DataService) { }

  user:any
  
ngOnInit() {
    let ob=this.data.getUser(JSON.parse(localStorage.getItem('user')).email)
    ob.subscribe((result)=>{
      this.user=result
    })
  }

}
