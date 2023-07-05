import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>
  ) { }


  async insertProduct(title: string, description: string, price: number) {

    const newProduct = new this.productModel({
      title,
      description,
      price
    });

    const result = await newProduct.save();
    console.log(result);
    
    return result.id;
  }

  async getProducts() {
    const result = await this.productModel.find().exec();
    return result.map( (product) => 
      ({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
      })     
    )
  }

  
  async getSingleProduct(id: string): Promise<Product> {
    const product = await this.findProduct(id);
    return product;
  }

  updateProduct(id: string, title: string, description: string, price: number) {
    
    // const [product, index] = this.findProduct(id);
    // const updatedProduct = {
    //   ...product,
    //   title: title ? title : product.title,
    //   description: description ? description : product.description,
    //   price: price ? price : product.price,
    // };

    // this.products[index] = updatedProduct;

    // return updatedProduct;
  }

  deleteProduct(id: string): void {
    // const [product, index] = this.findProduct(id);
    // this.products.splice(index, 1);
  }

  private async findProduct(id: string): Promise<Product> {


    const prod = await this.productModel.findById(id).exec();
    
    if (!prod) {
      throw new NotFoundException('product not found 2');
    }

    return {
      id: prod.id,
      title: prod.title,
      description: prod.description,
      price: prod.price
    };
  }
}