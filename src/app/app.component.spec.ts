import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { InputNameComponent } from './components/input-name/input-name.component';
import { ChatComposeComponent } from './components/chat-compose/chat-compose.component';
import { ChatFeedComponent } from './components/chat-feed/chat-feed.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        InputNameComponent,
        ChatComposeComponent,
        ChatFeedComponent,
        ChatMessageComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
