import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


//Interfaces
import { Schedule, ScheduleForm } from '../interfaces/index';

//Library
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private dataUrl = 'assets/data/schedule.json';
  public dataUserDB;

  constructor(private http: HttpClient) {
     this.http.get(this.dataUrl)
      .pipe(
        map((res:any) => res.users)       
      )  
      .subscribe((resul) => {
        this.dataUserDB = resul;       
      })
   }


  getSchedules(): Observable<Schedule[]> {
    return this.http.get(this.dataUrl)
    .pipe(
      map((res:any) => res.users) 
    )  
  }

  addUserSchedule(data:ScheduleForm){   
    let newUser:Schedule = {
      _id: UUID.UUID(),
      name:data.nameUser,
      phone: data.phoneUser,
      mobile: data.mobileUser
    }
    console.log(newUser);
  }




}
