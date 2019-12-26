import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule, Store } from '@ngrx/store';
import * as fromApp from '../../store/reducers';

import { ChatComposeComponent } from './chat-compose.component';
import { Message } from 'src/app/interfaces/message';

describe('ChatComposeComponent', () => {
  let component: ChatComposeComponent;
  let fixture: ComponentFixture<ChatComposeComponent>;
  let store: Store<fromApp.State>;
  let input;
  let btnSend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatComposeComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(fromApp.reducers),
      ]
    })
    .compileComponents();

    store = TestBed.get(Store);

    fixture = TestBed.createComponent(ChatComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    input = fixture.debugElement.query(By.css('.input-message'));
    btnSend = fixture.debugElement.query(By.css('.btn-send'));
  }));

  const setMsg = msg => {
    component.messageControl.setValue(msg);
  };

  const sendMsg = msg => {
    setMsg(msg);
    component.sendMessage();
    fixture.detectChanges();
  };

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have an input field`, () => {
    expect(input).toBeTruthy();
  });

  it(`should have a send button`, () => {
    expect(btnSend).toBeTruthy();
  });

  it(`should send message on enter`, () => {
    spyOn(component, 'sendMessage');
    const event = new KeyboardEvent('keyup', {
      key: 'Enter'
    });
    const msg = 'Exercitationem veniam voluptas aut omnis temporibus.';
    setMsg(msg);
    input.nativeElement.dispatchEvent(event);
    fixture.detectChanges();

    expect(component.sendMessage).toHaveBeenCalled();
  });

  it(`should send message on click`, () => {
    spyOn(component, 'sendMessage');
    const msg = 'Exercitationem veniam voluptas aut omnis temporibus.';
    setMsg(msg);
    btnSend.nativeElement.click();

    expect(component.sendMessage).toHaveBeenCalled();
  });

  it(`should send message`, fakeAsync(() => {
    const msg = 'Animi pariatur vel architecto.';
    sendMsg(msg);

    store.select(fromApp.getMessages).subscribe((messages: Message[]) => {
      const found = messages.filter((message: Message) => (message.body === msg));
      expect(found.length).toBeGreaterThanOrEqual(1);
    });
  }));

  it(`should append sent message to feed`, fakeAsync(() => {
    const msg = 'Dolorum tempora laborum consequuntur exercitationem aut.';
    sendMsg(msg);

    store.select(fromApp.getMessages).subscribe((messages: Message[]) => {
      const newMsg = messages[messages.length - 1];
      expect(newMsg.body).toBe(msg);
    });
  }));

  it(`should remove message from input after send`, fakeAsync(() => {
    sendMsg('message');
    expect(component.messageControl.value).toBe('');
  }));

});
