import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../todo/todo';

@Pipe({
  name: 'impureDemo',
  standalone: true,
})
export class ImpureDemoPipe implements PipeTransform {

  transform(value: Todo): string {
    console.log(JSON.stringify(value));
    return value.title;
  }

}
