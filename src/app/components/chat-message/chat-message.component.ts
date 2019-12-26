import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/reducers';
import { Message } from '../../interfaces/message';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message;
  user: User;

  constructor(private store: Store<fromApp.State>) { }

  ngOnInit(): void {
    this.store.select(fromApp.getUser).subscribe(user => this.user = user);
  }

  isMine(): boolean {
    return this.message.sender === this.user.name;
  }
}
