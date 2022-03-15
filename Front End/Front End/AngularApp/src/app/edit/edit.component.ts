import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit 
{
 user:any 
  constructor(private root:ActivatedRoute,
              private router:Router,
              private service:DataService)
  { 

  }

  ngOnInit() 
  {
    let observableResult=this.service.getUser(JSON.parse(localStorage.getItem('user')).email);

    observableResult.subscribe((result)=>{
      console.log(result);
      console.log(result);
      this.user=result;
      console.log("=======================")
      console.log(this.user)
      
    });
  }
  update()
  {
    console.log(this.user);
   let observableResult= this.service.updateUser(this.user);
   observableResult.subscribe((result)=>{
     console.log(result);

     this.router.navigate(['/profile']);
   })
  }
}
