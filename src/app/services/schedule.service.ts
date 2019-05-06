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

  constructor(private http: HttpClient){ }

  /**
  * Permite hacer la peteción HTTP por medio de Get y obtener la información del JSON con los registros
  */
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

  /**
  * Haciendo accesibles los datos por medio de los observables
  */
   getSchedules(): Observable<Schedule[]> {
    return this.usersSubject.asObservable();
  }

  /**
  * Emitir los nuevos valores para que todos los que dependan se actualicen
  */
  private refresh() {
    this.usersSubject.next(this.dataUserDB);
  }  

  /**
  * Permite hacer una copia del state generando un nuevo array y agreando el nuevo item. 
  */
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

  /**
  * Permite buscar el id del item en el arreglo creando una copia del estado pero sin ese item y luego actualizo el estado
  */

  deleteUserSchedule(idDelete:string){
    const newData = this.dataUserDB.filter(userSchedule =>  userSchedule._id !== idDelete)
    this.dataUserDB = newData;
    this.refresh();  
  }

  /**
  * Permite recorrer el arreglo con map para buscar el id del item para luego modificar los datos y luego actualizar el estado
  */
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








}
