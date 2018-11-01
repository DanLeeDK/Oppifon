import {SimpleUser} from '../models/simpleUser'

export class WEBAppointment{
    constructor(){
        this.title = "";
        this.text = "";
        this.maxParticipants = 1;
        this.participants = [];
        this.startTime = new Date();
        this.endTime = new Date();    
        this.name = "";
        this.creatorId = "";
    }
    title: string;
    text: string;
    maxParticipants: number;
    participants: SimpleUser[]
    startTime: Date;
    endTime: Date;
    name: string;
    creatorId: string;
    // participants    
  }

export class APIAppointment{
    time: Date;
    duration: string;
    text: string;
    name: string;
    creatorId: string;
    maxParticipants: number;
    // participants    
}