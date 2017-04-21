import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BoardService } from './board/board.service'
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { RouterModule } from '@angular/router';
import { BoardsComponent } from './boards/boards.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
import { ListNameComponent } from './list-name/list-name.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardsComponent,
    ListComponent,
    CardComponent,
    ModalComponent,
    ListNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: BoardsComponent
      },
      {
        path: 'board/:id',
        component: BoardComponent
      }
    ])
  ],
  providers: [BoardService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }