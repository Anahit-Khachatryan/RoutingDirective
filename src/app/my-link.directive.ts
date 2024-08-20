import { Directive, HostListener, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMyLink]',
  standalone: true
})
export class MyLinkDirective {
  router = inject(Router);
  @Input('appMyLink') link: string = '';

  @HostListener('click', ['$event'])  //listener es kaxum host elementi vra, nuyna gres a.addEventListene
  handleClick($event: MouseEvent) {
    $event.preventDefault();
    this.router.navigateByUrl(this.link);
  }       


  constructor() { }

}
