import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private router:Router,
              private route:ActivatedRoute,
              private service: DataService) 
  {  }

  ngOnInit() 
  {
    this.route.paramMap.subscribe((result)=>{
      let id=result.get("id");

      let observableResult = this.service.deleteAppointment(id);

      observableResult.subscribe((data)=>{
        if(data)
        {
          alert("Appointment Cancelled")
        }

        this.router.navigate(['/checkuserappointment']);
      });
    });
  }
}
