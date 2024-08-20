import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css'
})
export class DocsComponent {
  activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.queryParamMap)
    const a  = this.activatedRoute.snapshot.queryParamMap.get('a')
    console.log(a)
  }
}
