import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') colorBackground : string;

  @HostListener('focus') onFocus(){
    this.colorBackground = 'yellow';
  }

  @HostListener('blur') leaveFocus(){
    this.colorBackground= 'transparent';
  }

}
