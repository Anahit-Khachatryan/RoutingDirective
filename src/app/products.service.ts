import { Injectable } from '@angular/core';
import { IProductModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   products: IProductModel[] = [
    {id: 1,
     title: 'BMW',
     price: 123
    },
    {id: 2,
      title: 'Porsche',
      price: 456
     },
     {id: 3,
      title: 'Audi',
      price: 999
     },
   ]
  constructor() { }

  getById(id: number): IProductModel | undefined {
    return this.products.find(p => p.id === id)
  }
}
