import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNameComponent } from './input-name.component';

describe('InputNameComponent', () => {
  let component: InputNameComponent;
  let fixture: ComponentFixture<InputNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display input text and submit button', () => {
    const input = fixture.nativeElement.querySelector('.input-name');
    const btn = fixture.nativeElement.querySelector('.btn-submit');
    expect(input && btn).toBeTruthy();
  });

  it(`should save name on click`, () => {

  });

  it(`should save name on enter`, () => {

  });

  it(`should escape html tags on save`, () => {

  });
});
