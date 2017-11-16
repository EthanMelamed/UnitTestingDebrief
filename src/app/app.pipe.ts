import { Pipe, PipeTransform } from '@angular/core';
import { AppService } from './app.service';

@Pipe({
  name: 'app'
})
export class AppPipe implements PipeTransform {
  constructor(){
    
  }
  transform(value: any, args?: any): any {
    return "Piped "+ value;
  }

}
