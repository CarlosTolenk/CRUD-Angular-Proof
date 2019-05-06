import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatphonePipe } from './formatphone.pipe';

@NgModule({
  declarations: [
    FormatphonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatphonePipe
  ]
})
export class PipesModule { }
