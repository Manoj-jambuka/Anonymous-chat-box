import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { chatItem } from './model/chat-item';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {

  constructor(private http:HttpClient) { }
  baseUrl='https://63f89ce66978b1f9105d2c98.mockapi.io/adressbook/ChatList';

  private chatList=new BehaviorSubject<chatItem[]>([]);

  fetchChatList(){
    return this.http.get<chatItem[]>(this.baseUrl);
  }
  updateSubject(data:chatItem[]){
    this.chatList.next(data);
  }

  getChatList():Subject<chatItem[]>{
    return this.chatList;
  }

  getChatById(id:number){
    return this.http.get<chatItem>(this.baseUrl+'/'+id);
  }

  addNewChat(newChat:chatItem){
    return this.http.post<chatItem>(this.baseUrl,newChat);
  }

  updateChat(chat:chatItem){
      return this.http.put(this.baseUrl+'/'+chat.id,chat);
  }

  deleteContact(chat:chatItem){
    return this.http.delete(this.baseUrl+'/'+chat.id);
  }
}
