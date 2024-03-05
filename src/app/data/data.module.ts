import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { EnterExpensesFormComponent } from './data-entry/enter-expenses-form/enter-expenses-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DataEntryComponent,
    EnterExpensesFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DataEntryComponent
  ]
})
export class DataModule { }
