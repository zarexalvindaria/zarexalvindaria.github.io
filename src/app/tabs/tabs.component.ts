import { Component, Input } from '@angular/core';
import { IgxTabsModule } from 'igniteui-angular';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    imports: [IgxTabsModule]
})

export class TabsComponent {
    public tabAlignment = 'center';
    public tabAlignments = [
        { label: 'center', selected: this.tabAlignment === 'center' }
    ];
}