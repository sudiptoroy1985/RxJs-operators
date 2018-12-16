
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    MarkdownModule.forRoot(),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
