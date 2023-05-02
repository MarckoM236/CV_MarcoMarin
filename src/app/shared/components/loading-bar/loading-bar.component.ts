import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css']
})
export class LoadingBarComponent {

  @Input()
  public skill:string="";

  @Input()
  public level:number=0;

  @Input()
  public imageUrl?:string;

}
