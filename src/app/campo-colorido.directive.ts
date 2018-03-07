import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @Input() cor = '';

  @HostBinding('style.backgroundColor') colorBackground : string;

  @HostListener('focus') onFocus(){
    this.colorBackground = this.cor;
  }

  @HostListener('blur') leaveFocus(){
    this.colorBackground= 'transparent';
  }

  

}
