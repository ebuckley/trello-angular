import { TestBed, inject } from '@angular/core/testing';

import { TrelloService } from './trello.service';

describe('TrelloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrelloService]
    });
  });

  it('should ...', inject([TrelloService], (service: TrelloService) => {
    expect(service).toBeTruthy();
  }));
});
