import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IgxButtonGroupComponent } from 'igniteui-angular';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './project/project.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducationComponent,
    FooterComponent,
    ProjectComponent,
    ScrollTopComponent,
    TabsAlignmentComponent,
    TabComponent,
    TabsComponent
  ],
  imports: [BrowserModule, NgbModule, IgxButtonGroupComponent, IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export class TabsAlignmentComponent {
    public tabAlignment = 'start';
    public tabAlignments = [
        { label: 'start', selected: this.tabAlignment === 'start', togglable: true },
        { label: 'center', selected: this.tabAlignment === 'center', togglable: true },
        { label: 'end', selected: this.tabAlignment === 'end', togglable: true },
        { label: 'justify', selected: this.tabAlignment === 'justify', togglable: true }
    ];

    changeAlignment(event) {
        this.tabAlignment = this.tabAlignments[event.index].label;
    }
}