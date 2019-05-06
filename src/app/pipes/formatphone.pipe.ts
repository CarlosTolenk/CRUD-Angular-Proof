import { Pipe, PipeTransform } from '@angular/core';
import { parsePhoneNumber } from 'libphonenumber-js';

@Pipe({
  name: 'formatphone'
})
export class FormatphonePipe implements PipeTransform {

  /**
  * Por medio de la librearia puedo aplicarle el formato adecuado para mostrar los números de teléfonos correctamente
  */

  transform(phoneValue: number | string): string {
    const stringPhone = phoneValue + '';
    const phoneNumber = parsePhoneNumber(stringPhone, 'US');
    const formatted = phoneNumber.formatNational();
    return formatted;
  }

}
