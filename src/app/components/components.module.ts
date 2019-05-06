import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Components
import { TableScheduleComponent } from './table-schedule/table-schedule.component';
import { FormScheduleComponent } from './form-schedule/form-schedule.component';

//Pipes
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    TableScheduleComponent,
    FormScheduleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [
    TableScheduleComponent,
    FormScheduleComponent
  ]
})
export class ComponentsModule { }
