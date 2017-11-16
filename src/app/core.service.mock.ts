import { Injectable } from '@angular/core';

@Injectable()
export class MockCoreService {

  constructor() { }
  
  request(url: string): any {
    return null;
  }
}
