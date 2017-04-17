import { Component, OnInit } from '@angular/core';
import { Board } from './board/board';
import { BoardService } from './board/board.service'
import { NgModule }      from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
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
export class AppComponent  {
  title = 'Trello';
}

