import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board/board.service';
import { Board } from '../board/board';


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  boards: Board[];
   public newName;

// add new board
  submit($event: Event) {
    $event.preventDefault();
    let newName = this.newName.trim();
    let newID = +new Date();
    this.boards.push({ boardName: this.newName, id: newID, lists: []});
    this.newName = '';
  }

 
  constructor(private _boardService: BoardService) { }

//get data from array
  ngOnInit() {
    this.getBoards();
  }
  getBoards() {
    this.boards = this._boardService.getBoards();
  }
}
