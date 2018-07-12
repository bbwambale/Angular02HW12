import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
   @Input('bolInput')bolInput;

  constructor(private el:ElementRef, private re:Renderer2) { 

  }

     
  ngOnInit(){
    if(this.bolInput == false){
      this.re.setStyle(this.el.nativeElement, 'visibility', 'hidden');
    }
    else{
      this.re.setStyle(this.el.nativeElement, 'visibility', 'visible');
    }
  }
}
