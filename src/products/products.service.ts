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

  
  getSingleProduct(id: string): Product {
    const [product, index] = this.findProduct(id);
    return {...product};
  }

  updateProduct(id: string, title: string, description: string, price: number) {
    
    const [product, index] = this.findProduct(id);
    const updatedProduct = {
      ...product,
      title: title ? title : product.title,
      description: description ? description : product.description,
      price: price ? price : product.price,
    };

    this.products[index] = updatedProduct;

    return updatedProduct;
  }

  deleteProduct(id: string): void {
    const [product, index] = this.findProduct(id);
    this.products.splice(index, 1);
  }

  private findProduct(id: string): [Product, number] {
    const prodIndex = this.products.findIndex(
      el => el.id === id
    );
    
    if (prodIndex === -1) {
      throw new NotFoundException('product not found');
    }
    
    const product = this.products[prodIndex];
    return [product, prodIndex];
  }
}