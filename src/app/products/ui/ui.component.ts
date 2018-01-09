import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'selector-ui',
    templateUrl: './ui.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ComUI { 
    comTitle = '[ui.component]: ngx-bootstrap (TabsModule)';
}
