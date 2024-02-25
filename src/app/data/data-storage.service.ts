import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  public entries: Array<number> = [];

  constructor(
    private http: HttpClient
  ) { }

  public loadFile(fileName: string): Observable<any> {
    if (fileName) {
      console.log('File has been loaded: ', fileName);
    } else {
      console.log('File should be created');
    }
    const data = this.http.get(fileName);
    console.log(data);
    return data;
  }
}
