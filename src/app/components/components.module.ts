import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TableScheduleComponent } from './table-schedule/table-schedule.component';
import { FormScheduleComponent } from './form-schedule/form-schedule.component';

@NgModule({
  declarations: [
    TableScheduleComponent,
    FormScheduleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TableScheduleComponent,
    FormScheduleComponent
  ]
})
export class ComponentsModule { }
