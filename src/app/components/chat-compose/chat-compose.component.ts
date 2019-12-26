import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/reducers';
import * as appActions from 'src/app/store/app.actions';
import { FormControl } from '@angular/forms';
import { Message } from 'src/app/interfaces/message';

@Component({
  selector: 'app-chat-compose',
  templateUrl: './chat-compose.component.html',
  styleUrls: ['./chat-compose.component.scss']
})
export class ChatComposeComponent implements OnInit, OnDestroy {
  messages$: Observable<Message[]>;
  messageControl: FormControl;
  username$: Observable<string>;
  username: string;
  nameSubsc: Subscription;

  constructor(private store: Store<fromApp.State>) { }

  ngOnInit(): void {
    this.messages$ = this.store.select(fromApp.getMessages);
    this.messageControl = new FormControl('');
    this.nameSubsc = this.store
                        .select(fromApp.getName)
                        .subscribe(name => this.username = name);
  }

  ngOnDestroy(): void {
    this.nameSubsc.unsubscribe();
  }

  sendMessage(): void {
    const body = this.messageControl.value;
    const message: Message = {
      timestamp: Date.now(),
      sender: this.username,
      body
    };
    this.store.dispatch(new appActions.SendMessage(message));
    this.messageControl.setValue('');
  }

}
