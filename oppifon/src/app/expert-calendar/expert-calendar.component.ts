import { OnInit, Component, ChangeDetectionStrategy, ViewChild, TemplateRef} from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from '../shared/models/appointment';
import { AuthorizationService } from '../shared/authorization.service';
import { HttpService } from '../shared/http.service';
import { Calendar } from '../shared/models/Calendar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-expert-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './expert-calendar.component.html',
  styleUrls: ['./expert-calendar.component.scss']
})
export class ExpertCalendarComponent extends CalendarComponent implements OnInit {

  constructor( public modal: NgbModal, public errorModal: NgbModal, public auth: AuthorizationService, public http: HttpService, public route: ActivatedRoute) {
    super(modal, errorModal, auth, http)
  }

  appointment: Appointment;
  userCalendar: Calendar
  expertCalendar: Calendar

  ngOnInit(){
    this.showErrorMessage = false;
    this.appointment = new Appointment();
    this.user = this.auth.currentUser();
    this.http.getPrivateCalendar(this.user.id)
    .subscribe(data => {
      this.userCalendar = data
      this.userCalendar.appointments.forEach(element => {
        this.pushToLocalEventList(element, true);
      });
    })

    // Get expert calendar
    this.route.params.subscribe(params => {
      const expertid = params['id'];
      this.http.getPublicCalendar(expertid)
      .subscribe((calendar: Calendar) => {
        this.expertCalendar = calendar
        this.expertCalendar.appointments.forEach(element => {
        super.pushToLocalEventList(element, false);
        });
      })
    });    

  } 
}