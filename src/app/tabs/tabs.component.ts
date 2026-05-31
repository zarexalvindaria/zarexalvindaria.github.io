import { Component, Input } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    imports: [IgxButtonGroupComponent, IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})

export class TabsComponent {
    public tabAlignment = 'center';
    public tabAlignments = [
        { label: 'center', selected: this.tabAlignment === 'center' }
    ];
}
