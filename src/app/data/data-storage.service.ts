import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  public entries: Array<number> = [];
  
  constructor() { }

  public loadFile(): string {
    return 'string';
  }
}
