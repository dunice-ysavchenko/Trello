import { Component } from '@angular/core';
import {Board} from './board/board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trello';
  public boardArr = boards; 
}

var boards: Board[] = [
  {boardName: 'task1'},
  {boardName: 'task2'},
  {boardName: 'task3'},
  {boardName: 'task4'},
  ]