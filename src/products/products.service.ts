import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';


@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, description: string, price: number): string {
    const productId: string = Math.random().toString();
    const newProd = new Product(productId, title, description, price);    
    this.products.push(newProd);

    return productId;
  }

  getProducts() {
    return this.products.slice();
  }

  
  getSingleProduct(id: string): Product | undefined {
    const prodFoundList = this.products.filter(
      el => el.id === id
    );

    if (!prodFoundList.length) {
      throw new NotFoundException('product not found');
    }

    return {...prodFoundList[0]};
  }
}