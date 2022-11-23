import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

@HostListener('mouseenter') mouseenter(){
  this.render.addClass(this.elementRef.nativeElement.querySelectorAll("ul")[0], "show");
}


@HostListener('mouseleave') mouseleave(){
  this.render.removeClass(this.elementRef.nativeElement.querySelectorAll("ul")[0], "show");
}


  constructor(private elementRef: ElementRef, private render: Renderer2) { 

    
  }

}
