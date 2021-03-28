import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: ''
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, bookName: string): any {
    const resultArray = [];
  }

}
