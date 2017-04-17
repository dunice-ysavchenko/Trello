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

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardsComponent,
    ListComponent,
    CardComponent
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
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }


    // RouterModule.forRoot([
    //   {
    //     path: '', 
    //     component: BoardsComponent,
    //     children: [
    //       {
    //         path: 'board/:id',
    //         component: BoardComponent
    //       }
    //     ]




    //   }
    // ])