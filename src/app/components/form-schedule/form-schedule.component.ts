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

  /**
  * Creando el formulario y capturando los valores iniciales del mismo para poder renderizarlo en los input
  */
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nameUser: [this.dataSchedule.nameUser, Validators.required],
      phoneUser: [this.dataSchedule.phoneUser, Validators.required],
      mobileUser: [this.dataSchedule.mobileUser]    
   });
  }

  /**
  * Detecta los cambios de estados al momento de cambiando de modo creación o edición
  */
  ngOnChanges(changes: SimpleChanges) {  
    this.ngOnInit();
  }

  /**
  * Enviando al padre el cierre del modo edición para volver a la creación
  */
  changeModeF(){
    this.changeMode.emit(this.modeCreate);
  }

  /**
  * Capturando los datos de los inputs
  */
  get f() { 
    return this.registerForm.controls; 
  }

  /**
  * Seleccionando el modo de creación o edición para capturar los datos y emitir al padre los datos con la función correspondiente
  */
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
  /**
  * Reset del formulario
  */
    this.registerForm.markAsPristine();
    this.registerForm.setValue({
      nameUser: '',
      phoneUser: '',
      mobileUser: ''
    });  
    this.submitted = false;    
  }

  /**
  * Emitiendo al padre los datos de creación
  */
  saveUser(){  
    this.modeAdd.emit(this.registerForm.value);
  }

  /**
  * Emitiendo al padre los datos de edición
  */
  editUser(){
    let editUser = {
      id: this.dataSchedule._id,
      data: this.registerForm.value,
    }
    this.modeEdit.emit(editUser);
   this.changeModeF(); 
  } 

  

}
