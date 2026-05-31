import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular';

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  imports: [, IgxButtonGroupComponent, IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
@Component({
  selector: 'app-my-component',
  standalone: true, // 👈 Add this line
  imports: [CommonModule, OtherComponent], // 👈 This is now valid!
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})

export class TabsComponent {
    public tabAlignment = 'start';
    public tabAlignments = [
        { label: 'center', selected: this.tabAlignment === 'center', togglable: true },
    ];

}

