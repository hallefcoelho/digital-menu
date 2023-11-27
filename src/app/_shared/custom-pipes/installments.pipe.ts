import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'installments'
})
export class InstallmentsPipe implements PipeTransform {

  transform(value: number): any {
    return [
      {installments: value / 1, times: 1},
      {installments: value / 2, times: 2},
      {installments: value / 3, times: 3},
      {installments: value / 4, times: 4},
      {installments: value / 5, times: 5},
      {installments: value / 6, times: 6},
      {installments: value / 7, times: 7},
      {installments: value / 8, times: 8},
      {installments: value / 9, times: 9},
      {installments: value / 10, times: 10},
      {installments: value / 11, times: 11},
      {installments: value / 12, times: 12}
    ]
  }

}
