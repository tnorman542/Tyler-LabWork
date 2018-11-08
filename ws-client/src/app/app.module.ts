import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuotesComponent } from './quotes.component';
import { AppComponent }  from './app.component';
import { WebsocketService } from './websocket.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, QuotesComponent ],
  bootstrap:    [ AppComponent ] ,
  providers: [ WebsocketService ]
})
export class AppModule { }
