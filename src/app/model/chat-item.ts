import { message } from "./message";

export class chatItem{
    id:Number;
    name:String;
    avatar:String;
    time:Date;
    messages:message[];

    constructor(id:number,name:String,avatar:String,time:Date,messages:message[]){
        this.id=id;
        this.name=name;
        this.avatar=avatar;
        this.time=time;
        this.messages=messages;
    }
}