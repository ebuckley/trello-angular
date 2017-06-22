import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TrelloService } from 'app/services/trello.service';
import { ErrorComponent } from './components/error/error.component';
import { AccordianComponent } from './components/accordian/accordian.component';
import { MarkdownComponent } from './components/markdown/markdown.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    AccordianComponent,
    MarkdownComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [TrelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
