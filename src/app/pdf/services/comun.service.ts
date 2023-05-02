import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunService {

  constructor() { }
 
  //default false
  public btnPdf = new BehaviorSubject<boolean>(false);
  
}
