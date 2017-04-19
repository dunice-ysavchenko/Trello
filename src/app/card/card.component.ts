import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cards } from '../card/card';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../modal/modal.service';
import { ModalModel } from "../modal/modal.model";


@Component({
    selector: 'card-component',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})

export class CardComponent {
    @Input() card: Cards;
    @Output() onDeleteCard = new EventEmitter<string | number>();
    delete(cardDelete) {
        this.onDeleteCard.emit(cardDelete);
        console.log(cardDelete);
    }
    private header: string = '123';
    private description: string = '1234';

    private isModalDialogVisible: boolean = false;

	constructor(private notificationService: ModalService) {}

	public showToast(header: string, description: string) {
		this.notificationService.showToast(new ModalModel(header, description));
	}

	public showDialog() {
		this.isModalDialogVisible = true;
	}

	public closeModal(isConfirmed: boolean) {
		this.isModalDialogVisible = false;
		if (isConfirmed) {
			this.showToast('modal dialog', "modal dialog is confirmed");
		}
		else {
			this.showToast('modal dialog', "modal dialog is closed");
		}
	}



}