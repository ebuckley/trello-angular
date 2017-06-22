import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
declare const Trello;

@Injectable()
export class TrelloService {

  boards = {};
  cards = {};

  constructor() { }

  authenticate (): Observable<any> {
    return Observable.create((subject: Subject<any>) => {
      Trello.authorize({
        type: 'popup',
        name: 'Getting Started Application',
        scope: {
          read: 'true',
          write: 'true' },
        expiration: 'never',
        success: (value) => {
          subject.next(value);
          subject.complete();
        },
        error: (err) =>  subject.error(err)
      });
    });
  }

  private fetchBoard(id): Observable<any> {
    return Observable.create((s: Subject<any>) => {
      Trello.get(`/boards/${id}/lists`, (data) => {
        s.next(data);
        s.complete();
      }, err => s.error(err));
    });
  }

  getBoard(id: string): Observable <any> {
    if (!this.boards[id]) {
      this.boards[id] = this.fetchBoard(id).publishReplay(1).refCount();
    }
    return this.boards[id];
  }

  private fetchCards (id: string): Observable<any> {
    return Observable.create((s: Subject<any>) => {
      Trello.get(`/boards/${id}/cards`, success => {
        s.next(success);
        s.complete();
      }, err => s.error(err));
    });
  }
  getCards(boardId: string): Observable<any> {
    if (!this.cards[boardId]) {
      this.cards[boardId] = this.fetchCards(boardId).publishReplay(1).refCount();
    }
    return this.cards[boardId];
  }

  private fetchList (id: string): Observable<any> {
    return Observable.create((s: Subject<any>) => {
      Trello.get(`/list/${id}`);
    });
  }
}
