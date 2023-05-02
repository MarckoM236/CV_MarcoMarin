import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileComponent } from './file/file.component';
import { InfoModule } from '../info/info.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { ComunService } from './services/comun.service';



@NgModule({
  declarations: [
    FileComponent
  ],
  imports: [
    CommonModule,
    InfoModule,
    SidebarModule
  ],
  exports:[
    FileComponent
  ],
  providers:[
  ]
})
export class PdfModule { }
