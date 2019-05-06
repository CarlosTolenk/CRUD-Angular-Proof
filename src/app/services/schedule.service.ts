import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';


//Interfaces
import { Schedule, ScheduleForm } from '../interfaces/index';

//Library
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private usersSubject = new BehaviorSubject([]);
  private dataUrl = 'assets/data/schedule.json';
  private dataUserDB;

  constructor(private http: HttpClient){
    //  this.http.get(this.dataUrl)
    //   .pipe(
    //     map((res:any) => res.users)       
    //   )  
    //   .subscribe((resul) => {
    //     this.dataUserDB = resul;       
    //   })
   }

   getSchedules(): Observable<Schedule[]> {
    return this.usersSubject.asObservable();
  }

  private refresh() {
    // Emitir los nuevos valores para que todos los que dependan se actualicen.
    this.usersSubject.next(this.dataUserDB);
  }


  loadSchedulesData() {
    this.http.get(this.dataUrl)
    .pipe(
      map((res:any) => res.users)       
    )  
    .subscribe((resul) => {
      this.dataUserDB = resul;          
      this.refresh();
    })   

  }

  createNewUser(user: Schedule) {
    /**
    * Evitar hacer this.user.push() pues estaríamos modificando los valores directamente,
    * se debe generar un nuevo array !!!!.
    */
    

    this.dataUserDB = [...this.dataUserDB, user];
    this.refresh();
  }

  addUserSchedule(data:ScheduleForm){   
    let newUser:Schedule = {
      _id: UUID.UUID(),
      name:data.nameUser,
      phone: data.phoneUser,
      mobile: data.mobileUser
    }

    this.dataUserDB = [...this.dataUserDB, newUser];
    this.refresh();
  }

  deleteUserSchedule(idDelete:string){
    const newData = this.dataUserDB.filter(userSchedule =>  userSchedule._id !== idDelete)
    this.dataUserDB = newData;
    this.refresh();  
  }

  editUserSchedule(id:string, data:ScheduleForm){
    let newData:Schedule = this.dataUserDB.map((user) =>{
      if(user._id === id){
        user._id = id;
        user.name = data.nameUser;
        user.phone = data.phoneUser;
        user.mobile = data.mobileUser;
      }
    });
    this.refresh(); 
  }

  //const result = words.filter(word => word.length > 6);






}
