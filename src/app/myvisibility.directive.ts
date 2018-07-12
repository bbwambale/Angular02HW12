import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
   @Input('bolInput')bolInput;
  //private isHovering: boolean = false;

  constructor(private el:ElementRef, private re:Renderer2) { 
    //el.nativeElement.style.backgroundcolor ='gray';
    //re.setStyle(el.nativeElement, 'backgroundColor', 'gray');
  }
/* 
  @HostListener('mouseover')
  onMouseOver(){
    // window.alert('Hovered over');
    //let punchLineEL = this.el.nativeElement.querySelector('.orderedList');
    this.re.setStyle(this.el.nativeElement, 'display', 'none');
    //this.isHovering = true;
  }

  @HostListener('mouseout')
  onMouseOut(){
    // window.alert('Hovered over');
    //let punchLineEL = this.el.nativeElement.querySelector('.orderedList');
    this.re.setStyle(this.el.nativeElement, 'display', 'block');
    //this.isHovering = false;
  } */
     
  ngOnInit(){
    if(this.bolInput == false){
      this.re.setStyle(this.el.nativeElement, 'visibility', 'hidden');
    }
    else{
      this.re.setStyle(this.el.nativeElement, 'visibility', 'visible');
    }
  }
}
