import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BoardService } from './board/board.service'
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'board',
        component: BoardComponent
      }
    ])
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
