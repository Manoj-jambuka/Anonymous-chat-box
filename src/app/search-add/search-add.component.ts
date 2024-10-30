import { DatePipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataproviderService } from '../dataprovider.service';
import { chatItem } from '../model/chat-item';
import { message } from '../model/message';
@Component({
  selector: 'app-search-add',
  templateUrl: './search-add.component.html',
  styleUrls: ['./search-add.component.css']
})
export class SearchAddComponent implements OnDestroy{
  constructor(private dataService:DataproviderService,private datepipe:DatePipe,private router:Router){}
  fetchData!:Subscription
  onClickAdd(){
    let newChatName=prompt('Create a New Chat');
    if(newChatName){
      let currentDateTime=new Date();
      let newChat!:chatItem;
      // let WelcomeMessage:message={message:'Hello, Welcome',time:currentDateTime,sender:false};
      newChat=new chatItem(0,newChatName!,'',currentDateTime,[]);
       this.fetchData =this.dataService.addNewChat(newChat).subscribe((newItem)=>{
          this.dataService.fetchChatList().subscribe((data)=>{
            // console.log(data[data.length-1].id);
            console.log(newItem.id);
            this.dataService.updateSubject(data);
            this.router.navigate(['/chats/',newItem.id]);
            console.log('New Contact Added:',newItem.id);
          });
        });
    }
    else{
        alert('Length must be 30 characters ');
    }
  }

  ngOnDestroy(): void {
    this.fetchData.unsubscribe();
  }

  
}
