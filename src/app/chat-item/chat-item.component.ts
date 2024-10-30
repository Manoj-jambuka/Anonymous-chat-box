import { Component, Input, OnInit } from '@angular/core';
import { chatItem } from '../model/chat-item';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit{
  
  @Input() chat!:chatItem;
  showTime:boolean=true;
  currentdate=new Date();
  constructor(){
  }
  ngOnInit(): void {
    this.chat.time=new Date(this.chat.time);
    // setTimeout(() => {
    //   this.ToggleShowTime();
    // }, 2000);
  }
  ToggleShowTime(){
    if(this.chat.time.toDateString()==this.currentdate.toDateString()){
      return true;
    }
    else{
      return false;
    }
  }
}
