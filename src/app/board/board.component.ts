import { Component, OnInit } from '@angular/core';
import { Board } from './board';
import { BoardService } from './board.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Lists } from '../list/list'
import { ListComponent } from '../list/list.component'

@Component({
    selector: 'my-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css'],
})

export class BoardComponent implements OnInit {
    boards: Board[];
    lists: Lists[];
    title: string;
    public newList;
    private id: number;
    private subscription: Subscription;
    constructor(private _boardService: BoardService,
        private activateRoute: ActivatedRoute) {
        this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
        console.log('id: ', this.id);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ngOnInit() {
        this.getBoards();
        this.getLists();
        console.log(this.boards)
    }
    getBoards() {
        this.boards = this._boardService.getBoards();
    }

    submit($event: Event) {
        $event.preventDefault();

        let newList = this.newList.trim();
        console.log(newList);
        let newID = +new Date();
        this.lists.push({ listName: this.newList, id: newID, cards: [] });
    }
    getLists() {
        for (let board of this.boards) {
            if (board.id == this.id) {
                this.lists = board.lists;
                this.title = board.boardName;
                console.log(this.lists);
            }
        }
    }

    onDelete(listDelete) {
        console.log('id for delete: ', listDelete);
        let deleteIndex = this.lists.findIndex(function (obj) {
            return obj.id == listDelete;
        });
        console.log('index:',deleteIndex);
        this.lists.splice(deleteIndex, 1);
    }

};