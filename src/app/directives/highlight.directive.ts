import { Directive ,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() x;
  @Input() y;
  @Input() z;
  
  @Input( 'appHighlight' ) defaultColor : string;

  constructor( private _el : ElementRef ) { }

  @HostListener( 'mouseenter' )
  onMouseenter() {
      this._el.nativeElement.style.backgroundColor = this.defaultColor || 'yellow';
  }
  
  @HostListener( 'mouseout' )
  onMouseout() {
      this._el.nativeElement.style.backgroundColor = 'initial';
  }
}
// @Input() Red :'Red';
// @Input() Green :'Green';
// @Input() Yellow :'yellow';
// @Input('appHighlight') defaultColor: string;
//   constructor(private _el : ElementRef) { }
// @HostListener('mouseenter')
// onmouseenter(){
//   this._el.nativeElement.style.backgroundColor = this.defaultColor || this.Yellow;
// }
// @HostListener('onmouseout')
// onmouseout(){
//   this._el.nativeElement.style.backgroundColor = this.Green;
// }
// }
