import { TestBed } from '@angular/core/testing';

import { DataStorageService } from './data-storage.service';

describe('DataStorageService', () => {
  let service: DataStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an entries array', () => {
    expect(service.entries).toBeTruthy();
  });

  describe('loadFile', () => {

    it('should exist', () => {
      expect(service.loadFile).toBeTruthy();
    });

    it('should load a file if it exists', () => {
      // const loadFileSpy = spyOn(DataStorageService, 'loadFile');
      // expect(service.loadFile).toHaveBeenCalledWith('data.json');
    });

    it('should create a file if none exists');
  });

  //describe('')

});
