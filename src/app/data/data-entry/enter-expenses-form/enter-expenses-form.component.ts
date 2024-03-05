import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../data-storage.service';
import { ExpenseDataInterface } from '../expense-data.interface';

@Component({
  selector: 'app-enter-expenses-form',
  templateUrl: './enter-expenses-form.component.html',
  styleUrls: ['./enter-expenses-form.component.scss']
})
export class EnterExpensesFormComponent implements OnInit {
  public data: any;
  public currentAmount!: any;
  public enteredData: number[] = [];

  constructor(
    public dataService: DataStorageService
  ) { }

  ngOnInit(): void {
    this.dataService.loadFile('data.json').subscribe((data) => {
      this.data = data;
    });
  }

  onExpenseEntered() {
    this.enteredData.push(this.currentAmount);
    this.currentAmount = '';
  }

}

