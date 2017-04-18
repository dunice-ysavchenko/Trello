import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cards } from '../card/card';
import { ModalComponent } from '../modal/modal.component';


@Component({
    selector: 'card-component',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})

export class CardComponent {
    @Input() card: Cards;
    @Output() onDeleteCard = new EventEmitter<string | number>();
    public detailsVisible: Boolean = false;
    delete(cardDelete) {
        this.onDeleteCard.emit(cardDelete);
        console.log(cardDelete);
    }
    detailsCard() {
        this.detailsVisible = true;
        console.log(this.detailsVisible);
    }
}