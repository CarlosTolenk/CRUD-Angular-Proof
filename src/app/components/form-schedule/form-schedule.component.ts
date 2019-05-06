import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Interfaces
import { Schedule } from '../../interfaces/index';

@Component({
  selector: 'ct-form-schedule',
  templateUrl: './form-schedule.component.html',
  styleUrls: ['./form-schedule.component.css']
})
export class FormScheduleComponent implements OnInit {

  @Output() modeEdit = new EventEmitter();
  @Output() modeAdd = new EventEmitter();

  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nameUser: ['', Validators.required],
      phoneUser: ['', Validators.required],
      mobileUser: ['']    
   });
  }

  get f() { 
    return this.registerForm.controls; 
  }

  addUser(){
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    } 
    
    this.modeAdd.emit(this.registerForm.value);
    this.registerForm.markAsPristine();
    this.registerForm.setValue({
      nameUser: '',
      phoneUser: '',
      mobileUser: ''
    });  
    
  }

  editUser(data:Schedule){
    
  }

  

}
