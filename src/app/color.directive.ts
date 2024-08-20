import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true
})
export class ColorDirective implements OnInit{
  @Input('appColor') color: string = 'black';
  @Input('fontSize') fontSize: string = '14px'
  constructor(private elementRef: ElementRef<HTMLParagraphElement>) {
    console.log('elementRef', this.elementRef)
   }

   ngOnInit(): void {
     this.elementRef.nativeElement.style.color = this.color;
     this.elementRef.nativeElement.style.fontSize = this.fontSize;

   }

}
//elementRef vor inject enk anum pahvats e dra hascen vorin directive tvel enk
// pipe value es transform anum, isk espes elementi het gorts unes

