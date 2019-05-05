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
  public submitted = false;


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
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    } 
    
    this.modeAdd.emit(this.registerForm.value);
  }

  editUser(data:Schedule){

  }

  

}
