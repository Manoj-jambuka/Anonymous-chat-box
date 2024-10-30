import { Component, OnInit } from '@angular/core';
import { DataproviderService } from '../dataprovider.service';
import { chatItem } from '../model/chat-item';
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
})
export class ChatListComponent implements OnInit {
  chatList:chatItem[]=[];
  isChatHome!:boolean;
  constructor(private dataService:DataproviderService){}
  ngOnInit(){
    this.dataService.fetchChatList().subscribe((data)=>{
      this.dataService.updateSubject(data);
      console.log('chatList in ChatListComponent',this.chatList);
    });

    this.dataService.getChatList().subscribe((data)=>{this.chatList=data});
  }
}
