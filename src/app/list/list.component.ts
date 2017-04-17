import { Component, Input} from '@angular/core';
import { Lists } from '../list/list'
import { CardComponent } from '../card/card.component';

@Component({
    selector: 'list-component',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})

export class ListComponent {
    @Input() list: Lists;

}