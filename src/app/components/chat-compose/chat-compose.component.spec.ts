import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComposeComponent } from './chat-compose.component';

describe('ChatComposeComponent', () => {
  let component: ChatComposeComponent;
  let fixture: ComponentFixture<ChatComposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatComposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should be at the bottom of the screen`, () => {
  });

  it(`should have an input field`, () => {
  });
  it(`should have a send button`, () => {
  });
  it(`should send message on enter`, () => {
  });
  it(`should send message on click`, () => {
  });
  it(`should send message (save it to store)`, () => {
  });

});
