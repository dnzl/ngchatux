import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/reducers';

import { Message } from '../../interfaces/message';

@Component({
  selector: 'app-chat-feed',
  templateUrl: './chat-feed.component.html',
  styleUrls: ['./chat-feed.component.scss']
})
export class ChatFeedComponent implements OnInit, AfterViewChecked {
  messages$: Observable<Message[]>;
  autoScroll: boolean = true;

  @ViewChild('messagesFeedContainer', { static: false })
  private messagesFeedContainer: ElementRef;
  @ViewChild('messagesFeed', { static: false })
  private messagesFeed: ElementRef;

  constructor(private store: Store<fromApp.State>) {}

  ngOnInit() {
    this.messages$ = this.store.select(fromApp.getMessages);
  }

  ngAfterViewChecked() {
    if (this.autoScroll && !this.isAtBottom()) {
      this.scrollToBottom();
    }
  }

  feedHasScroll() {
    if (!this.messagesFeedContainer) { return false; }
    const container = this.messagesFeedContainer.nativeElement;
    const feed = this.messagesFeed.nativeElement;
    return container.clientHeight <= feed.scrollHeight;
  }

  isAtBottom() {
    if (!this.messagesFeedContainer) { return false; }
    if (!this.feedHasScroll()) { return true; }
    const c = this.messagesFeedContainer.nativeElement;
    return (c.clientHeight + c.scrollTop) >= c.scrollHeight;
  }

  scrollToBottom() {
    if (!this.messagesFeedContainer) { return false; }
    const container = this.messagesFeedContainer.nativeElement;
    container.scrollTop = container.scrollHeight;
  }

  onScroll() {
    const feed = this.messagesFeedContainer.nativeElement;
    this.autoScroll = this.isAtBottom();
  }
}
