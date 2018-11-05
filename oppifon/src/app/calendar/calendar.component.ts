import { OnInit, Component, ChangeDetectionStrategy, ViewChild, TemplateRef} from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView} from 'angular-calendar';
import { Appointment } from '../shared/models/appointment';
import { AuthorizationService } from '../shared/authorization.service';
import { HttpService } from '../shared/http.service';
import { User } from '../shared/models/Models';
import { Calendar } from '../shared/models/Calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;
  @ViewChild('errorContent')
  errorContent: TemplateRef<any>;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  user: User;
  errorMessage: string;
  showErrorMessage: boolean;

  modalData: {
    action: string;
    event: CalendarEvent;
  };

    actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        
        if(event.meta.creatorId == this.user.id) {
          this.http.deleteAppointment(event.meta)
          .subscribe(() => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            this.handleEvent('Deleted', event);
          })
        } else {
          this.http.removeUserFromAppointment(this.user.id ,event.meta)
          .subscribe(() => {
            this.events = this.events.filter(iEvent => iEvent !== event);
            this.handleEvent('Deleted', event);
          })
        }
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent<Appointment>[] = [  ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal, private errorModal: NgbModal, private auth: AuthorizationService, private http: HttpService) {}

  appointment: Appointment;
  calendar: Calendar

  ngOnInit(){
    this.showErrorMessage = false;
    this.appointment = new Appointment();
    this.user = this.auth.currentUser();
    this.http.getPrivateCalendar(this.user.id)
    .subscribe(data => {
      this.calendar = data
      this.calendar.appointments.forEach(element => {
        this.pushToLocalEventList(element);
      });
    })
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });

  }

  private pushToLocalEventList(appointment: Appointment){
    this.events.push({
      title: appointment.title,
      start: new Date(appointment.startTime),
      end: new Date(appointment.endTime),
      color: colors.red,
      draggable: false,
      resizable: {
        beforeStart: false,
        afterEnd: false
      },
      actions: this.actions,
      meta: appointment
    });
    this.refresh.next();
  }

  addEvent(): void {
    let myAppointment = new Appointment();
    myAppointment.title = this.appointment.title;
    myAppointment.text = this.appointment.text;
    myAppointment.maxParticipants = this.appointment.maxParticipants,
    myAppointment.startTime = this.appointment.startTime;
    myAppointment.endTime = this.appointment.endTime;
    myAppointment.name = this.user.firstName + " " + this.user.lastName;
    myAppointment.creatorId = this.user.id;

    this.http.addAppointment(myAppointment)
    .subscribe(data => {
      myAppointment.id = data;
      this.pushToLocalEventList(myAppointment);
      this.appointment = new Appointment();
    },
    data => {
      this.errorMessage = data.error.message;
      this.errorModal.open(this.errorContent, { size: 'lg' });
    });   
  }
}
