import { Injectable } from '@nestjs/common';
import { Product } from './product.model';


@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, description: string, price: number): string {
    const productId: string = new Date().toString();
    const newProd = new Product(productId, title, description, price);    
    this.products.push(newProd);

    return productId;

  }
}