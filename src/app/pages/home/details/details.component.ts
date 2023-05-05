import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/home.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id:any;
  details:any;
  constructor(private Ds:HomeService,private ar:ActivatedRoute){
    
  this.ar.params.subscribe(
  {
  next: (params)=>{ 
     this.id =params['id']
    this.readData()
  },
  error: () => this.id = 0
   }
  )
}

   readData(){
   this.Ds.getDetails(this.id).subscribe(
        {
        next: (data:any)=>this.details=data,
        error: ()=> this.details = {}
     }
    )
 }
 
}