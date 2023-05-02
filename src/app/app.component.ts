import { Component} from '@angular/core';
import { ComunService } from './pdf/services/comun.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCV';
  public visibility:boolean=false;
  
  constructor(private comunService:ComunService){}
  
  verCV():void{
    this.visibility=true;
  }  

  //generate change to the value of the btnPdf variable of the service (true)
    generarPdf():void{  
      this.comunService.btnPdf.next(true);
      this.visibility=false;
  }
}