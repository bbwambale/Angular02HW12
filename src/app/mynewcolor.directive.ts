
import { Directive, ElementRef, Renderer2, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMynewcolor]'
})
export class MynewcolorDirective {
  @Input()myColor;
  @Output()output = new EventEmitter();

  constructor(private el:ElementRef, private re:Renderer2) { 
    el.nativeElement.style.backgroundcolor ='gray';
    re.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('click') onclick(){
    console.log(this.myColor);
    this.re.setStyle(this.el.nativeElement, 'color', this.myColor);
    this.output.emit('An element changed its color to '+ this.myColor);

  }


}
