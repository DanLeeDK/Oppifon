import { Appointment } from './appointment';

export class Calendar{
    id: string;
    appointments: Appointment[];
    daysOff: Date[];
    workDays: Date[];
}