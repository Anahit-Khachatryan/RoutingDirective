import { Directive, inject, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideAfter]',
  standalone: true
})
export class HideAfterDirective implements OnInit {
  @Input('appHideAfter') hideAfter = 5000;
  @Input('appHideAfterThen') then: TemplateRef<any> | undefined
  viewContainerRef = inject(ViewContainerRef)
  templateRef = inject(TemplateRef<any>); //template chunenk vonc haskacav. en vor * dnum enk sa poxakervum e ng-template e steghtsvum directive talis e dran u elementy dra mej, stacvnum e directive tvel enk ng-template-in voch te elementin
  
  constructor() { 
    
  }
  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    setTimeout(() => {
      // this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.viewContainerRef.clear();
      if(this.then) {
        this.viewContainerRef.createEmbeddedView(this.then);
      }
    }, this.hideAfter)
  }


}
