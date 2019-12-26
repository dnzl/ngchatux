import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';

import { ChatMessageComponent } from './chat-message.component';

describe('ChatMessageComponent', () => {
  let component: ChatMessageComponent;
  let fixture: ComponentFixture<ChatMessageComponent>;
  let datePipe: DatePipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    datePipe = new DatePipe('en-US');
    fixture = TestBed.createComponent(ChatMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should show timestamp`, () => {
    const timestamp = Date.now();
    component.message = {
      sender: 'Darth Vader',
      timestamp,
      body: 'I find your lack of faith disturbing',
    };

    fixture.detectChanges();
    const innerHTML = fixture.debugElement.nativeElement.innerHTML;
    const time = datePipe.transform(timestamp, 'hh:mm');
    expect(innerHTML).toContain(time);
  });

  it(`should show sender's name`, () => {
    const sender = 'Darth Vader';
    component.message = {
      sender,
      timestamp: Date.now(),
      body: 'I find your lack of faith disturbing'
    };

    fixture.detectChanges();
    const innerHTML = fixture.debugElement.nativeElement.innerHTML;
    expect(innerHTML).toContain(sender);
  });

  it(`should show message's body`, () => {
    const body = 'I find your lack of faith disturbing';
    component.message = {
      sender: 'Darth Vader',
      timestamp: Date.now(),
      body
    };

    fixture.detectChanges();
    const innerHTML = fixture.debugElement.nativeElement.innerHTML;
    expect(innerHTML).toContain(body);
  });
});
