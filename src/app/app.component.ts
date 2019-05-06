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
  public modeCreate:boolean = true;
  public newUser:ScheduleForm;

  constructor(private _scheduleService:ScheduleService){
    this.headerTitleTable = ['Name', 'Phone', 'Mobile'];
    this.newUser = {
      _id:'',
      nameUser:'',
      phoneUser:'',
      mobileUser:''
    }
  }

  ngOnInit(): void {    
    this._scheduleService.loadSchedulesData();
    this.scheduleData = this._scheduleService.getSchedules();  
  }

  editUser(editUser){     
    this.newUser = {
      _id: editUser._id,
      nameUser: editUser.name,
      phoneUser: editUser.phone,
      mobileUser: editUser.mobile
    };
 
    this.modeCreate = false;
  }

  changeMode(){
    this.modeCreate = !this.modeCreate;
    this.newUser = {
      _id:'',
      nameUser:'',
      phoneUser:'',
      mobileUser:''
     }
  }

  deleteUser(id){
    this._scheduleService.deleteUserSchedule(id);
  }

  addUserForm(data:ScheduleForm){
    this._scheduleService.addUserSchedule(data);
  }

  editUserForm(data:any){    
   this._scheduleService.editUserSchedule(data.id, data.data)
  }



}
