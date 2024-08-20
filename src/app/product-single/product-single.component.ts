import { Component, inject } from '@angular/core';
import { IProductModel } from '../product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-single',
  standalone: true,
  imports: [],
  templateUrl: './product-single.component.html',
  styleUrl: './product-single.component.css'
})
export class ProductSingleComponent {
  product: IProductModel | undefined = undefined;
  activatedRoute = inject(ActivatedRoute)
  productService = inject(ProductsService)

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.params['id'];
    this.product = this.productService.getById(id)
  }
}
