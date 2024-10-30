import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchAddComponent } from './search-add/search-add.component';
import { ChatItemComponent } from './chat-item/chat-item.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ChatDetailsComponent } from './chat-details/chat-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { DatePipe } from '@angular/common';
import { SortPipe } from './sort-by.pipe';
import { AnonymousChatComponent } from './anonymous-chat/anonymous-chat.component';
import { ChatNotFoundComponent } from './chat-not-found/chat-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchAddComponent,
    ChatItemComponent,
    ChatListComponent,
    ChatDetailsComponent,
    PageNotFoundComponent,
    SortPipe,
    AnonymousChatComponent,
    ChatNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
