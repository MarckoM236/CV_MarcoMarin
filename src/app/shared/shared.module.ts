import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './components/section/section.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    SectionComponent,
    LoadingBarComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SectionComponent,
    LoadingBarComponent,
    ListComponent
  ]
})
export class SharedModule { }
