import { Component, OnInit } from '@angular/core';
import { Board } from './board/board';
import { BoardService } from './board/board.service'
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BoardService]
})
export class AppComponent implements OnInit {
  title = 'Trello';
  boards: Board[];
  public newName;
  submit($event: Event) {
    $event.preventDefault();

    let newName = this.newName.trim();
    
    this.boards.push({ boardName: this.newName, id: '', lists: []});
  }

  constructor(private _boardService: BoardService) { }

  ngOnInit() {
    this.getBoards();
    console.log(this.boards)
  }
  getBoards() {
    this.boards = this._boardService.getBoards();
  }

}

