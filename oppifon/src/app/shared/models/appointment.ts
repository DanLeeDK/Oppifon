import {SimpleUser} from '../models/simpleUser'

export class Appointment{
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
    id: string;
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