import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/reducers';

import { Message } from '../../interfaces/message';

@Component({
  selector: 'app-chat-feed',
  templateUrl: './chat-feed.component.html',
  styleUrls: ['./chat-feed.component.scss']
})
export class ChatFeedComponent implements OnInit {
  messages$: Observable<Message[]>;

  constructor(private store: Store<fromApp.State>) {}

  ngOnInit() {
    this.messages$ = this.store.select(fromApp.getMessages);
  }
}
