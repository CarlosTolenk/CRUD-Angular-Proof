import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable} from 'rxjs';

//Services
import { ScheduleService } from './services/index';

//Interfaces
import { Schedule, ScheduleForm } from './interfaces/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  
  public scheduleData:Observable<any[]>;
  public headerTitleTable:string[];
  private users$: Observable<any[]>;

  constructor(private _scheduleService:ScheduleService){
    this.headerTitleTable = ['Name', 'Phone', 'Mobile'];
  }

  ngOnInit(): void {    
    this._scheduleService.loadSchedulesData();
    this.scheduleData = this._scheduleService.getSchedules();  
  }

  editUser(id){
    console.log(id);
  }

  deleteUser(id){
    console.log(id);
  }

  addUserForm(data:ScheduleForm){
    this._scheduleService.addUserSchedule(data);
  }

  editUserForm(data:ScheduleForm){
    console.log(data);    
  }



}
