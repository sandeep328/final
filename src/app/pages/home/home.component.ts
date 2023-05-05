import { Component} from '@angular/core';
import { HomeService } from 'src/app/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  types=[
    "All",
    "Dairy products",
    "Vegetables A-E",
    "Fruits A-F",
    "Breads, cereals, fastfood,grains",
    "Soups",
    "Fats, Oils, Shortenings"
  ]
  selected="All";
  names:any;
 
      constructor(hs:HomeService){
      hs.getDairyProducts().subscribe(
          {
            next: (data:any)=> (this.names =data),
            error: ()=> (this.names= []),
          });
          
          
      }
}
