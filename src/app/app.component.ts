import { Component, OnInit } from '@angular/core';
import { TrelloService } from 'app/services/trello.service';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'logging you in...';
  boardId = new FormControl('', Validators.required);
  boardData = null;

  constructor(private trelloService: TrelloService) {}

  ngOnInit() {
    this.trelloService.authenticate()
      .subscribe(data => {
        console.log('logged into trello');
        this.title = 'Welcome to trello Sow report tool';
      }, err => {
        console.error(err);
        this.title = 'Error with login!';
      });

    this.boardId.valueChanges
      .filter(v => !!v)
      .debounceTime(100)
      .distinctUntilChanged()
      .switchMap((id) => {
        return this.trelloService.getCards(id)
          .catch(err => {
            this.boardId.setErrors({
              fetch: err
            });
            return Observable.of(null);
          });
      })
      .subscribe(board => {
        this.boardData = board;
        console.log('got board', board);
      });
  }
  generateReport () {
    this.title = 'generating report...';
  }
}
