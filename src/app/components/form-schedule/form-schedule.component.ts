import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Interfaces
import {ScheduleForm } from '../../interfaces/index';

@Component({
  selector: 'ct-form-schedule',
  templateUrl: './form-schedule.component.html',
  styleUrls: ['./form-schedule.component.css']
})
export class FormScheduleComponent implements OnInit {

  @Input() modeCreate;
  @Input() dataSchedule:ScheduleForm;
  @Output() changeMode = new EventEmitter();
  @Output() modeEdit = new EventEmitter();
  @Output() modeAdd = new EventEmitter();
  

  public registerForm: FormGroup;
  public submitted:boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nameUser: [this.dataSchedule.nameUser, Validators.required],
      phoneUser: [this.dataSchedule.phoneUser, Validators.required],
      mobileUser: [this.dataSchedule.mobileUser]    
   });
  }

  ngOnChanges(changes: SimpleChanges) {  
    this.ngOnInit();
  }

  changeModeF(){
    this.changeMode.emit(this.modeCreate);
  }

  get f() { 
    return this.registerForm.controls; 
  }

  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }    

    if(this.modeCreate){
      this.saveUser();
    }else{
      this.editUser();
    }

    this.registerForm.markAsPristine();
    this.registerForm.setValue({
      nameUser: '',
      phoneUser: '',
      mobileUser: ''
    });  
    this.submitted = false;    
  }

  saveUser(){  
    this.modeAdd.emit(this.registerForm.value);
  }

  editUser(){
    let editUser = {
      id: this.dataSchedule._id,
      data: this.registerForm.value,
    }
    this.modeEdit.emit(editUser);
   this.changeModeF(); 

  }

  

  

}
