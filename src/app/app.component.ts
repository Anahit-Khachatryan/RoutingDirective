import { Component, ComponentRef, ElementRef, inject, QueryList, SimpleChanges, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { TestComponent } from './test/test.component';
import { NgClass } from '@angular/common';
import { ColorDirective } from './color.directive';
import { MyLinkDirective } from './my-link.directive';
import { HideAfterDirective } from './hide-after.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderComponent, TestComponent, NgClass, ColorDirective, MyLinkDirective, HideAfterDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testProgram';
  @ViewChild('paragraph') paragraph: ElementRef<HTMLParagraphElement> | undefined;
  @ViewChildren('div') par: ElementRef<HTMLParagraphElement> | undefined;
//  @ViewChild(HeaderComponent,{
//   read: ComponentRef,  // sranov karank ed componenti changeDetection run anenk ev ayln
//  }) header: ComponentRef<HeaderComponent> | undefined;
 @ViewChildren(HeaderComponent) childComponents: QueryList<HeaderComponent> | undefined;

 @ViewChild('temp') temp: TemplateRef<HTMLDivElement> | undefined;

 @ViewChild(HeaderComponent,{
  read: ViewContainerRef, // viewContainerRef-ov asum enk vortegh, vor elementi mej template nkari, createEmbeddedView talis enk vortegh
 }) header: ViewContainerRef| undefined;


  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  viewContainerRef = inject(ViewContainerRef);
  bool = false;

  ngOnInit() {
    setTimeout(() => {
      this.bool = true
    },1_000)


    //orinak makur js-um  const a = document.createElement('a'); domum haytnvelu hamar grum enk document.body.appendChild('a'), inch vor container e petk
    //nuyn dzev el viewContainerRef - en teghna vortegh es componenti hamar karank inch vor elementner avelacnenk, vortegh vor render eghats e dra mej
    // this.viewContainerRef.createEmbeddedView() - vorpes parametr spasum e templateRef
    // this.viewContainerRef.clear() - makrum e voch te en inch static grats e ayl inch orinak createEmbeddedView-ov avelacrel enk da hanenk
  }

  ngOnChanges(changes: SimpleChanges) {} //kanchvum e constructoric heto ete input- en unenum

  onClick(eventObj: MouseEvent) {
    console.log('eventObj', eventObj)
    this.router.navigate(['docs'], {
      queryParams: {
        a: 1,
        b: 2
      }
    })
    
  }
  ngAfterViewInit() {
    console.log(111, this.paragraph?.nativeElement)
    console.log(222, this.par)
    console.log(333, this.header)
    // this.header?.createEmbeddedView(inch vor tempalteRef)
    //  this.header?.instance - es instance mej componenti hascen e pahvats ComponentRefi depkum
    console.log('childComponents', this.childComponents) //querySelectorAll - i nman, sa mi kani componenteri depkum es anum, ashxatum e ham componenteri ham 
     this.header?.createEmbeddedView(this.temp!) //childi mej avelacnum e
  }
}
