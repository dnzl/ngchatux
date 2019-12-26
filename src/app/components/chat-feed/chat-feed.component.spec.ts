import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';

import { ChatFeedComponent } from './chat-feed.component';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { ChatComposeComponent } from '../chat-compose/chat-compose.component';

import * as fromApp from '../../store/reducers';
import { Message } from '../../interfaces/message';
import * as appActions from '../../store/app.actions';

describe('ChatFeedComponent', () => {
  let component: ChatFeedComponent;
  let fixture: ComponentFixture<ChatFeedComponent>;
  let store: Store<fromApp.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatFeedComponent,
        ChatMessageComponent,
        ChatComposeComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(fromApp.reducers)
      ]
    })
    .compileComponents();

    store = TestBed.get(Store);

    fixture = TestBed.createComponent(ChatFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  const addMessage = (
    body = 'May the force be with you',
    sender = 'Obi-wan Kenobi',
    timestamp = Date.now()
  ) => {
    const message: Message = {
      timestamp,
      sender,
      body
    };
    store.dispatch(new appActions.SendMessage(message));
  };

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should show empty state if there are no messages`, () => {
    const emptyState = fixture.debugElement.query(By.css('.empty-state'));
    expect(emptyState).toBeTruthy();
  });

  it(`should hide empty state if there are messages`, () => {
    addMessage();
    fixture.detectChanges();
    const emptyState = fixture.debugElement.query(By.css('.empty-state'));
    expect(emptyState).toBeFalsy();
  });

  it(`should show messages is there are messages`, () => {
    const msg = 'Hello there!';
    addMessage(msg);
    fixture.detectChanges();
    const msgDiv = fixture.debugElement.nativeElement.innerHTML;
    expect(msgDiv).toContain(msg);
  });

});
