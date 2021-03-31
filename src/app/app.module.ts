import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerBoardComponent } from './player-board/player-board.component';
import { ReceiverComponent } from './boards/receiver.component';
import { EmitterComponent } from './boards/emitter.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerBoardComponent,
    ReceiverComponent,
    EmitterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
