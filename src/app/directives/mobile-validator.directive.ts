import { Directive, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import {validphone} from '../validator/valiphone'

@Directive({
  selector: '[valphone]',
  providers: [
    { provide: NG_VALIDATORS, useValue: validphone,multi: true}
]
})
export class MobileValidatorDirective{
  constructor() { }
}
