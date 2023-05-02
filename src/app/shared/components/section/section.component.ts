import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

@Input()
public titleSection:string="";

@Input()
public classTitle?:string;

@Input()
public url?:string;
}
