import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/reducers';

import { AppComponent } from './app.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { InputNameComponent } from './components/input-name/input-name.component';
import { ChatComposeComponent } from './components/chat-compose/chat-compose.component';
import { ChatFeedComponent } from './components/chat-feed/chat-feed.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(fromApp.reducers),
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        InputNameComponent,
        ChatComposeComponent,
        ChatFeedComponent,
        ChatMessageComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
