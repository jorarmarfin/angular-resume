import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BlogComponent } from './blog/blog.component';
import { WorksComponent } from './works/works.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [ProfileComponent, ContactsComponent, BlogComponent, WorksComponent, ResumeComponent, AboutComponent],
  exports:[
    ProfileComponent, ContactsComponent, BlogComponent, WorksComponent, ResumeComponent, AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
