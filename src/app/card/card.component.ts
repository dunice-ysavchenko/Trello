import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { Cards } from '../card/card';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../modal/modal.service';



@Component({
    selector: 'card-component',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})

export class CardComponent {
    @Input() card: Cards;
    @Output() onDeleteCard = new EventEmitter<string | number>();
    edit: boolean = false;
    delete(cardDelete) {
        this.onDeleteCard.emit(cardDelete);
        console.log(cardDelete);
    }
    
  
    constructor(private notificationService: ModalService) { }


    public showToast(card) {
        this.notificationService.showToast(card);
    }

 
    editCardName() {
        this.edit = true;
    }

    saveCardName() {
        this.edit = false;
    }









    // ловит наведение курсора мыши
    public editVisible: boolean = true;
    //   @HostListener('mouseover') onMouseOver() {
    //     this.editVisible = true; 
    //     console.log('cardOn:', this.editVisible)
    //   }
    //   @HostListener('mouseout') onMouseOut() {
    //     this.editVisible = false; 
    //   }

}