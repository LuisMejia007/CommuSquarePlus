import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

import {WindowReferenceService} from '../ui-component-services/window-reference.service';

@Directive({
  selector: '[appStickNav]'
})
export class StickNavDirective {

  constructor(
    private nativeWindow: WindowReferenceService,
    private reference: ElementRef,
    private renderer: Renderer2
    ) { }


    @HostListener('window: scroll', ['$event'])
    windowScroll(e) {

      const element = document.getElementById('nav-bar');

      if (this.nativeWindow.nativeWindow.pageYOffset > 150) {

        this.renderer.setStyle(this.reference.nativeElement, 'position', 'fixed');
        this.renderer.setStyle(this.reference.nativeElement, 'z-index', '1');
        this.renderer.setStyle(this.reference.nativeElement, 'height', '100px');


      } else if (this.nativeWindow.nativeWindow.pageYOffset <= 150) {

        this.renderer.setStyle(this.reference.nativeElement, 'position', 'relative');
        this.renderer.removeStyle(this.reference.nativeElement, 'z-index');
        this.renderer.setStyle(this.reference.nativeElement, 'height', '150px');

      }
    }

}
