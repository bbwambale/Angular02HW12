
import { Directive, ElementRef, Renderer2, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMynewcolor]'
})
export class MynewcolorDirective {
  @Input()myColor;
  @Output()output = new EventEmitter();
  //private isHovering: boolean = false;

  constructor(private el:ElementRef, private re:Renderer2) { 
    el.nativeElement.style.backgroundcolor ='gray';
    re.setStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('click') onclick(){
    console.log(this.myColor);
    this.re.setStyle(this.el.nativeElement, 'color', this.myColor);
    this.output.emit('An element changed its color to '+ this.myColor);
    
    // window.alert('Hovered over');
    //let punchLineEL = this.el.nativeElement.querySelector('.orderedList');
    //this.re.setStyle(this.el.nativeElement, 'display', 'none');
    //this.isHovering = true;
  }

  /* @HostListener('mouseout')
  onMouseOut(){
     //window.alert('Hovered over');
    let punchLineEL = this.el.nativeElement.querySelector('.orderedList');
    this.re.setStyle(this.el.nativeElement, 'display', 'block');
   // this.isHovering = false;
  }  */
     

}
