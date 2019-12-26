import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule, Store } from '@ngrx/store';
import * as fromApp from '../../store/reducers';
import * as appActions from 'src/app/store/app.actions';

import { InputNameComponent } from './input-name.component';

describe('InputNameComponent', () => {
  let component: InputNameComponent;
  let fixture: ComponentFixture<InputNameComponent>;
  let store: Store<fromApp.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNameComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(fromApp.reducers),
      ]
    })
    .compileComponents();

    store = TestBed.get(Store);

    fixture = TestBed.createComponent(InputNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display form if name is empty', fakeAsync(() => {
    store.dispatch(new appActions.SetName(null));
    fixture.detectChanges();
    const form = fixture.nativeElement.querySelector('.form-name');
    expect(form).toBeTruthy();
  }));

  it('should display form on #btnChangeName click', fakeAsync(() => {
    const newName = 'Obi-wan Kenobi';
    store.dispatch(new appActions.SetName(newName));
    fixture.detectChanges();
    const btnChangeName = fixture.nativeElement.querySelector('#btnChangeName');
    btnChangeName.click();
    fixture.detectChanges();
    const form = fixture.nativeElement.querySelector('.form-name');
    expect(form).toBeTruthy();
  }));

  it('should hide form if name was saved', fakeAsync(() => {
    store.dispatch(new appActions.SetName('Darth Vader'));
    fixture.detectChanges();
    const form = fixture.debugElement.query(By.css('.form-name'));
    expect(form).toBeFalsy();
  }));

  it('should display welcome message if name was saved', fakeAsync(() => {
    store.dispatch(new appActions.SetName('Luke Skywalker'));
    fixture.detectChanges();
    const welcome = fixture.debugElement.query(By.css('#txtWelcome')).nativeElement;
    expect(welcome.innerHTML).toContain('Welcome Luke Skywalker');
  }));

  it('should hide welcome message if no name was saved', fakeAsync(() => {
    store.dispatch(new appActions.SetName(null));
    fixture.detectChanges();
    const h1 = fixture.debugElement.query(By.css('#txtWelcome'));
    expect(h1).toBeFalsy();
  }));

  it(`should save name on click`, fakeAsync(() => {
    const newName = 'Padme';
    const nameControl = component.nameControl;
    const submit = fixture.debugElement.query(By.css('.btn-submit'));
    nameControl.setValue(newName);
    submit.nativeElement.click();

    store.select(fromApp.getName).subscribe(name => {
      expect(name).toBe(newName);
    });
  }));
  it(`should save name on enter`, fakeAsync(() => {
    const event = new KeyboardEvent('keyup', {
      key: 'Enter'
    });
    const newName = 'Amidala';
    const nameControl = component.nameControl;
    const input = fixture.debugElement.query(By.css('.input-name'));
    nameControl.setValue(newName);
    input.nativeElement.dispatchEvent(event);
    fixture.detectChanges();

    store.select(fromApp.getName).subscribe(name => {
      expect(name).toBe(newName);
    });
  }));
});
