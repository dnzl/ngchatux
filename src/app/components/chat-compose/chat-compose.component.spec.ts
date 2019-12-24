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
});
