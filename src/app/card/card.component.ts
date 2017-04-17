import { Component, Input} from '@angular/core';
import { Cards } from '../card/card';

@Component({
    selector: 'card-component',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})

export class CardComponent {
    @Input() card: Cards;

}