import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {
  @Input()
  public course:string="";

  @Input()
  public institute:string="";

  @Input()
  public status:string="";

  @Input()
  public date:string="";
}
