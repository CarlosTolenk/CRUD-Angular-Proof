import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Interfaces
import { Schedule } from '../../interfaces/index';

//Library
import swal from 'sweetalert2';

@Component({
  selector: 'ct-table-schedule',
  templateUrl: './table-schedule.component.html',
  styleUrls: ['./table-schedule.component.css']
})
export class TableScheduleComponent implements OnInit {

  @Input() scheduleData:Schedule[];
  @Input() headerTitleTable:string[];
  @Output() modeEdit = new EventEmitter();
  @Output() modeDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editUser(id){
    this.modeEdit.emit(id);
  }

  deteleuser(id){
    this.modeDelete.emit(id);
  }



}
