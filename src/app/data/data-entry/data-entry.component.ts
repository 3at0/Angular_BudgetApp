import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss']
})
export class DataEntryComponent implements OnInit {
  public data: any;
  public entryField: any;

  constructor(
    private dataService: DataStorageService
  ) { }

  public ngOnInit(): void {
    const dataPath = 'assets/data.json';
    this.dataService.loadFile(dataPath).subscribe(
      data => {
        this.data = data;
      },
      error => {
        console.error('error loading file: ', error);
      }
    );
  }

  public getDataFromEntry(): void {
    // TODO: Get data from input field
  }
}
