import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { InputNameComponent } from './components/input-name/input-name.component';
import { ChatFeedComponent } from './components/chat-feed/chat-feed.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatComposeComponent } from './components/chat-compose/chat-compose.component';

@NgModule({
  declarations: [
    AppComponent,
    InputNameComponent,
    ChatFeedComponent,
    ChatMessageComponent,
    ChatComposeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
