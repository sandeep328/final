import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-box',
  templateUrl: './plan-box.component.html',
  styleUrls: ['./plan-box.component.css']
})
export class PlanBoxComponent {
  @Input() Products:any;

}
