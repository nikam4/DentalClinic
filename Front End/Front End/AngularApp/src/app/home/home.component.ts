import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
  doctors:any;
  
  constructor(private data:DataService){  }

  ngOnInit() 
  {
    let observableResult=this.data.allDoctors();
    observableResult.subscribe((result)=>{
      this.doctors=result
    });
    console.log(this.doctors)
  }
}
