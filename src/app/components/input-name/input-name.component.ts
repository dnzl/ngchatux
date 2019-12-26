import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/reducers';
import * as appActions from 'src/app/store/app.actions';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss']
})
export class InputNameComponent implements OnInit {
  name$: Observable<string>;
  nameControl: FormControl;

  constructor(private store: Store<fromApp.State>) { }

  ngOnInit() {
    this.name$ = this.store.select(fromApp.getName);
    this.nameControl = new FormControl('', [Validators.required]);
  }

  resetName() {
    this.store.dispatch(new appActions.SetName(null));
  }

  saveName() {
    const name = this.nameControl.value;
    if (!name.trim().length) {
      return;
    }
    this.store.dispatch(new appActions.SetName(name));
  }

}
