import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './project/project.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducationComponent,
    FooterComponent,
    ProjectComponent,
    ScrollTopComponent,
  ],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
