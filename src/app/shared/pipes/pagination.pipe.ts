import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(value) {
    let arr = []
    for (let i = 1; i <= value; i++) {
      arr.push(i)
    }
    return arr;
  }
}
