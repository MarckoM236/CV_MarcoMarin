import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './page/information/information.component';
import { SharedModule } from '../shared/shared.module';
import { ExperienceComponent } from './components/experience/experience.component';
import { TrainingComponent } from './components/training/training.component';



@NgModule({
  declarations: [
    InformationComponent,
    ExperienceComponent,
    TrainingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    InformationComponent
  ],
  providers:[
  ]
})
export class InfoModule { }
