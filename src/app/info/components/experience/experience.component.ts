import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  @Input()
  public post:string="";

  @Input()
  public dateStart:string="";

  @Input()
  public dateEnd:string="";

  @Input()
  public functions:string[]=[];
}
