import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnonymousChatComponent } from './anonymous-chat/anonymous-chat.component';
import { AppComponent } from './app.component';
import { ChatDetailsComponent } from './chat-details/chat-details.component';
import { ChatItemComponent } from './chat-item/chat-item.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatNotFoundComponent } from './chat-not-found/chat-not-found.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'chats',pathMatch:'full'},
  {path:'chats',component:ChatListComponent,
    children:[
      {path:'',component:AnonymousChatComponent},
      {path:'chat-not-found',component:ChatNotFoundComponent},
      {path:':id',component:ChatDetailsComponent},
      
    ]
  },
  {path:'**', component:PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
