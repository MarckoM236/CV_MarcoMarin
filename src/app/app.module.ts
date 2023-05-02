import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { InfoModule } from './info/info.module';
import { PdfModule } from './pdf/pdf.module';
import { ComunService } from './pdf/services/comun.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    InfoModule,
    PdfModule
  ],
  providers: [
    ComunService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
