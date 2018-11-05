import { OnInit, Component, ChangeDetectionStrategy, ViewChild, TemplateRef} from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { Appointment } from '../shared/models/appointment';
@Component({
  selector: 'app-my-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './my-calendar.component.html',
  styleUrls: ['./my-calendar.component.scss']
})
export class MyCalendarComponent extends CalendarComponent implements OnInit{

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
  }
 
}
