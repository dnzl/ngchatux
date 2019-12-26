import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFeedComponent } from './chat-feed.component';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { ChatComposeComponent } from '../chat-compose/chat-compose.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ChatFeedComponent', () => {
  let component: ChatFeedComponent;
  let fixture: ComponentFixture<ChatFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatFeedComponent,
        ChatMessageComponent,
        ChatComposeComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should show empty state if there are no messages`, () => {});
  it(`should hide empty state if there are messages`, () => { });
  it(`should have screen height-(composer height)`, () => { });
});
