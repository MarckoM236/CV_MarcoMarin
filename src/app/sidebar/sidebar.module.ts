import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './page/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';



@NgModule({
  declarations: [
    ProfileComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
   ProfileComponent
  ]
})
export class SidebarModule { }
