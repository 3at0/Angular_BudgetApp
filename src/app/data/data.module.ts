import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntryComponent } from './data-entry/data-entry.component';



@NgModule({
  declarations: [
    DataEntryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DataEntryComponent
  ]
})
export class DataModule { }
