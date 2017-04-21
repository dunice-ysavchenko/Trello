import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lists } from '../list/list'
import { CardComponent } from '../card/card.component';
import { ListNameComponent } from '../list-name/list-name.component'

@Component({
    selector: 'list-component',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})

export class ListComponent {
    @Input() list: Lists;
    @Output() onDelete = new EventEmitter<number>();
    delete(listDelete) {
        this.onDelete.emit(listDelete);
        console.log(listDelete);
    }
    public newTask;
    submit($event: Event) {
        $event.preventDefault();

        let newTask = this.newTask.trim();
        let newID = +new Date();
        console.log(newID);
        this.list.cards.push({ cardName: this.newTask, id: newID, cardDescription: '' });
        this.newTask = '';

    }

    onDeleteCard(cardDelete) {
        console.log('id for delete: ', cardDelete);
        let deleteIndex = this.list.cards.findIndex(function (obj) {
            return obj.id == cardDelete;
        });
        console.log('index:', deleteIndex);
        this.list.cards.splice(deleteIndex, 1);
    }

}