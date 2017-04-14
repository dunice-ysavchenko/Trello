import { Component, OnInit } from '@angular/core';
import { Board } from './board/board';
import { BoardService } from './board/board.service'
import { NgModule }      from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BoardComponent } from './board/board.component';

// RouterModule.forRoot([
//   {
//     path: 'board',
//     component: BoardComponent
//   }
// ])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Trello';
  boards: Board[];
  public selectedBoard: Board;
  public newName;
  submit($event: Event) {
    $event.preventDefault();

    let newName = this.newName.trim();
    let newID = '' +  +new Date();
    this.boards.push({ boardName: this.newName, id: newID});
    console.log(this.boards);
  }

  onSelect(board: Board){
    this.selectedBoard = board;
    console.log(this.selectedBoard);
  };
  constructor(private _boardService: BoardService) { }

  ngOnInit() {
    this.getBoards();
    console.log(this.boards)
  }
  getBoards() {
    this.boards = this._boardService.getBoards();
  }

}

