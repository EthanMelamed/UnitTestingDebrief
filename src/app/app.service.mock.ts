import { Injectable } from '@angular/core';

@Injectable()
export class MockAppService {

  constructor() { }

  loadSomeNumbers(): Promise<number[]>{
    return null;
  }
}
