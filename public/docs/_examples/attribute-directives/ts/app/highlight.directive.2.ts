/* tslint:disable:no-unused-variable */
// #docregion
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})

export class HighlightDirective {
  // #docregion ctor
  constructor(private el: ElementRef) { }
  // #enddocregion ctor

  // #docregion mouse-methods, host
  @HostListener('mouseenter') onMouseEnter() {
    // #enddocregion host
    this.highlight('yellow');
    // #docregion host
  }

  @HostListener('mouseleave') onMouseLeave() {
    // #enddocregion host
    this.highlight(null);
    // #docregion host
  }
  // #enddocregion host

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  // #enddocregion mouse-methods

}
// #enddocregion
