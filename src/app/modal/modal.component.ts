import { Component, ViewEncapsulation, Input } from "@angular/core";
import { ModalService } from "./modal.service";
import { Cards } from '../card/card'

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  cardName: string;
  card: Cards;
  editDescription: boolean = false;
  constructor(private _notificationService: ModalService) {
    this._notificationService.notifications
      .subscribe(data => {
        this.cardName = data.cardName;
        this.card = data;
      });

  }
  editCardDescription() {
    this.editDescription = true;
  }
  saveCardDescription() {
    this.editDescription = false;
  }
  closeModal() {
    this.card = null;
  }

} 
