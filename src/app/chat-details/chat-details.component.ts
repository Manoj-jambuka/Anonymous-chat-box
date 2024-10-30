import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { chatItem } from '../model/chat-item';
import { ActivatedRoute, Router } from '@angular/router';
import { DataproviderService } from '../dataprovider.service';
import { FormControl, FormControlName, Validators } from '@angular/forms';
import { message } from '../model/message';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.css']
})
export class ChatDetailsComponent implements OnInit,OnDestroy {
  chatId!:number;  
  chat!:chatItem;
  chatList!:chatItem[];
  contactLoaded:boolean=false;
  Sender:boolean=true;
  messageList!:message[];
  getChatList!:Subscription;
  constructor(private route:ActivatedRoute,private dataService:DataproviderService, private router:Router){
  }
  // ngOnInit(): void {
    //   // this.getContact();
    //   this.route.paramMap.subscribe(params=>{
    //     this.chatId=+params.get('id')!;
    //     this.dataService.getChatById(this.chatId).subscribe(data=>{
    //      this.chat=data;
    //      this.contactLoaded=true;
    //      this.messageList=this.chat.messages;
    //      console.log(this.messageList);
    //    });
    //  });

    ngOnInit(): void {
      // this.getChatList=this.dataService.getChatList().subscribe((data)=>{this.chatList=data});
      this.route.paramMap.subscribe(params=>{
        this.chatId=+params.get('id')!;
        this.dataService.getChatById(this.chatId).subscribe({
          next:(data)=>{
            this.chat=data;
            this.contactLoaded=true;
            this.messageList=this.chat.messages;
          },
          error:(error)=>{this.router.navigate(['chats/chat-not-found'])},
        });
      });
    }
    
    @ViewChild('newMessage') newMessage!:ElementRef;
    onInput(){
      if(this.newMessage.nativeElement.value!=''){
        this.chat.messages.push({message:this.newMessage.nativeElement.value,time:new Date(),sender:this.Sender});
        this.chat.time=this.chat.messages[this.chat.messages.length-1].time;
        this.dataService.updateChat(this.chat).subscribe(()=>{
          this.dataService.fetchChatList().subscribe((data)=>{this.dataService.updateSubject(data)});
        })
        this.newMessage.nativeElement.value='';
      }
    }   

    toggleSender(){
      this.Sender=!this.Sender;
    }

    onDelete(){
      if(confirm('Are You sure , You want to delete this Chat ?')){
        this.dataService.deleteContact(this.chat).subscribe(()=>{
          this.dataService.fetchChatList().subscribe((data)=>{this.dataService.updateSubject(data)});
          this.router.navigate(['']);
          // this.dataService.getChatList().subscribe((data)=>{
          //   if(data.length>0){
          //     // this.router.navigate(['/chats',data[data.length-1].id]);
          //   }
          // })
        });
      }
    }
    
    ngOnDestroy(): void {
      console.log('Destorying ');
      // this.getChatList.unsubscribe();
    }
}